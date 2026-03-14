import{ref,onMounted,watch,type Ref} from 'vue';
import type {ChartOptions} from 'chart.js';
import type { myChartDataType } from '../interfaces/chartInterface';
import { useTotalGastos } from './useTotalGastos';
import { useTotalIngreso } from './useTotalIngreso';

export function useGrapichs(chartRef?: Ref<any>){

    const{totalGastos,cargarTotalGastos}= useTotalGastos();
    const{totalIngreso,cargarTotalIngreso}= useTotalIngreso();


    const chartData = ref<myChartDataType>({
        labels: ["Ingresos", "Gastos"],
        datasets: [
            {
                label: "Finanzas mensual",
                data: [0, 0],
                backgroundColor: ["#10b981", "#ef4444"],
                // borderColor: ["#059669", "#dc2626"],
                // borderWidth: 2,
                // borderRadius: 8,
                // hoverBackgroundColor: ["#059669", "#dc2626"],
                // hoverBorderColor: ["#047857", "#b91c1c"],
            },
        ],
    });

    const chartOptions = ref<ChartOptions<"bar">>({
        responsive: true,
        maintainAspectRatio: true,
        indexAxis: 'x',
        plugins: {
            title: {
                display: true,
                color: '#1f2937',
                text: 'Finanzas Mensuales',
                font: {
                    size: 18,
                    // weight: '600' as const,
                    family: "'Inter', 'Segoe UI', sans-serif"
                },
                padding: {
                    top: 10,
                    bottom: 20
                }
            },
            legend: {
                display: true,
                position: 'top' as const,
                labels: {
                    color: '#6b7280',
                    font: {
                        size: 13,
                        // weight: '500' as const
                    },
                    padding: 15,
                    boxWidth: 12,
                    boxHeight: 12,
                    borderRadius: 3,
                    usePointStyle: true
                }
            },
            tooltip: {
                backgroundColor: 'rgba(31, 41, 55, 0.9)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                padding: 12,
                displayColors: true,
                callbacks: {
                    label: (context: any) => {
                        const label = context.dataset.label || '';
                        const value = new Intl.NumberFormat('es-ES', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(context.parsed.y);
                        return `${label}: ${value}`;
                    }
                }
            },
            datalabels: {
                color: '#111827',
                anchor: 'end',
                align: 'top',
                offset: 8,
                font: {
                    // weight: '600' as const,
                    size: 13
                },
                formatter: (value: number) => {
                    return new Intl.NumberFormat('es-ES', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0
                    }).format(value);
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    // drawBorder: false
                },
                ticks: {
                    color: '#6b7280',
                    font: {
                        size: 13,
                        // weight: '500' as const
                    },
                    padding: 10
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: '#e5e7eb',
                    // drawBorder: false,
                    lineWidth: 1
                },
                ticks: {
                    color: '#6b7280',
                    font: {
                        size: 12,
                        // weight: '500' as const
                    },
                    padding: 8,
                    callback: (value: any) => {
                        return new Intl.NumberFormat('es-ES', {
                            notation: 'compact',
                            compactDisplay: 'short'
                        }).format(value);
                    }
                }
            }
        },
        animation: {
            duration: 750,
            easing: 'easeInOutQuart' as const
        }
    });

    const actualizarGrafico = () => {
        chartData.value = {
            labels: ["Ingresos", "Gastos"],
            datasets: [
                {
                    label: "Finanzas mensuales",
                    data: [
                        Number(totalIngreso.value) || 0,
                        Number(totalGastos.value) || 0
                    ],
                    backgroundColor: ["#10b981", "#ef4444"],
                    // borderColor: ["#059669", "#dc2626"],
                    // borderWidth: 2,
                    // borderRadius: 8,
                    // hoverBackgroundColor: ["#059669", "#dc2626"],
                    // hoverBorderColor: ["#047857", "#b91c1c"],
                }
            ]
        };
    };

    watch([totalIngreso,totalGastos],actualizarGrafico);

    onMounted (async()=>{
        await cargarTotalGastos();
        await cargarTotalIngreso();
        actualizarGrafico();
        console.log(totalGastos.value,totalIngreso.value);
    });

    return{
        chartRef,
        chartData,
        chartOptions,
        actualizarGrafico
    }

}