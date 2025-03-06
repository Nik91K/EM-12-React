import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

import sourceData from "../data/data.json";
import './style.css'

function handleLeave(legend: any) {
    legend.chart.data.datasets[0].backgroundColor.forEach((color: string, index: number, colors: string[]) => {
        colors[index] = color.length === 9 ? color.slice(0, -2) : color;
    });
    legend.chart.update();
}

const data = {
    labels: sourceData.map((data) => data.label),
    datasets: [
        {
            data: sourceData.map((data) => data.totalSales),
            backgroundColor: [
                "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"
            ].slice(0, sourceData.length),
            borderColor: "#fff",
            borderWidth: 1
        }
    ]
};

const options = {
    plugins: {
        legend: {
            onHover: () => console.log("Hover"),
            onLeave: handleLeave
        }
    }
};

function CircularStatistic() {
    return <Pie data={data} options={options} className='CircularStatistic'/>;
}

export default CircularStatistic;
