import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = (torneos) => {
    return {
        labels: ['Terminados', 'Activos'],
        datasets: [
            {
                label: '# Torneos',
                data: [torneos.finalizado, torneos.activos],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 2,
            },
        ],
    }
}

const DoughnutChart = ({ torneos }) => {

    return (
        <>
            <div className='header'>
                <h1 className='title'>Torneos Actuales</h1>
            </div>
            <Doughnut data={data(torneos)} />
        </>
    );
}

export default DoughnutChart;