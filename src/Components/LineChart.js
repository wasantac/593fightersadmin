import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    datasets: [
        {
            label: '# de Visitas',
            data: [12, 19, 3, 5, 2, 3, 15],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

const LineChart = () => (
    <>
        <div className='header'>
            <h1 className='title'>Visitas</h1>
        </div>
        <Line data={data} options={options} />
    </>
);

export default LineChart;