import{ref,onMounted,watch,type Ref} from 'vue';
import type {ChartOptions} from 'chart.js';
import type { myChartDataType } from '../interfaces/chartInterface';
import { useTotalGastos } from './useTotalGastos';
import { useTotalIngreso } from './useTotalIngreso';

export function useGrapichs(chartRef?: Ref<any>){

    const{totalGastos,cargarTotalGastos}= useTotalGastos();
    const{totalIngreso,cargarTotalIngreso}= useTotalIngreso();


    const chartData = ref<myChartDataType>({
        labels:["Ingresos","Gastos"],
        datasets:[
            {
                label:"Finanzas mensual",
                data:[0,0],
                backgroundColor:["green","yellow"]
            },
        ],    
    });

    const chartOptions=ref<ChartOptions<"bar">>({
        responsive: true,
        maintainAspectRatio:false,
        plugins:{
            title:{
                display:true,
                color:'black',
                text:'finanzas mensuales',
                font:{size:20}
            },
            legend:{
                display:false,
            },
            datalabels:{
                color:'black',
                anchor:'end',
                align:'top',
                font:{
                    weight:'bold'
                },
                formatter:(value:number)=> value
            }
        },

        scales:{
            x:{
                grid:{
                    display: false,
                },
                ticks:{
                    color:'black',
                    font:{size:20}
                }
            },
            y:{
                grid:{
                    display:false,
                },
                ticks:{
                    color:'black',
                    font:{size:20}
                }
            }
        }
    });

    const actualizarGrafico=()=>{
        chartData.value = {
            labels:["Ingreso","Gastos"],
            datasets:[
                {
                    label:"Finanzas mensuales",
                    data:[
                        Number(totalIngreso.value) || 0,
                        Number(totalGastos.value) || 0
                    ],
                    backgroundColor:["brown","brown"]
                }
            ]
        }
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