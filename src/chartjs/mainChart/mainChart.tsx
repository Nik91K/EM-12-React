import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

import sourceData from "../data/data.json";
import './style.css'

const data={
    labels: sourceData.map((data) => data.label),
    datasets: [
        {
            label: 'Sales today',
            data: sourceData.map((data) => data.totalSales),
            backgroundColor: '#9E00FF',
            borderColor: '#63E6BE',
        }
    ]
}

const options = {
    plugins: {
        legend: {
            display: false   
        },
        tooltip: {
            bodyFont: { size: 13 }
        }
    },
    scales: {
        x: {
            ticks: {
                font: {
                    size: 14
                }
            }
        },
        y: {
            beginAtZero: true,
            ticks: {
                font: {
                    size: 15
                }
            }
        }
    }
}

function MainStatistics() {
    return <Bar className='time-statistics-bar' data={data} options={options} />
}

export default MainStatistics;
