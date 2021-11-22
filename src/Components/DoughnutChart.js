import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
                borderWidth: 1,
            },
        ],
    }
}

const DoughnutChart = ({ torneos }) => {
    const [numTorneos, setNumTorneos] = useState({ activos: 0, total: 0, finalizado: 0 });
    useEffect(() => {
        axios.get('/torneos/count').then(res => {
            setNumTorneos({
                activos: res.data.activos,
                total: res.data.torneo,
                finalizado: res.data.torneo - res.data.activos
            })
        }).catch(err => { })
    }, [])
    return (
        <>
            <div className='header'>
                <h1 className='title'>Torneos Actuales</h1>
            </div>
            <Doughnut data={data(numTorneos)} />
        </>
    );
}

export default DoughnutChart;