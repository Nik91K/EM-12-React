import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

import sourceData from "../data/data.json";
import './style.css'
function TimeStatistics() {
    return (
        <div className="time-statistics">
            <Bar className='time-statistics-bar'
                data={{ 
                    labels: sourceData.map((data) => data.label),
                    datasets: [
                        {
                            label: 'Sales today',
                            data: sourceData.map((data) => data.totalSleepTime),
                            backgroundColor: '#9E00FF',
                            borderColor: '#63E6BE',
                        }
                    ]
                }}
                options={{
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
                }}
            />
        </div>
    )
}

export default TimeStatistics;
