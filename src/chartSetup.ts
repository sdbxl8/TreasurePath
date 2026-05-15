import ChartDataLabels from 'chartjs-plugin-datalabels';

import{
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    ChartDataLabels
);

// mysql://root:muyskWjqOLffrWvANjeldYoHoexZSxKC@hopper.proxy.rlwy.net:43608/railway