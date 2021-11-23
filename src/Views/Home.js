import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Dashboardpills from '../Components/Dashboardpills';
import LineChart from '../Components/LineChart';
import axios from 'axios';
import DoughnutChart from '../Components/DoughnutChart';
const Home = () => {
    const [numTorneos, setNumTorneos] = useState({ activos: 0, total: 0, finalizado: 0 });
    const [user, setUser] = useState(0)
    useEffect(() => {
        axios.get('/torneos/count').then(res => {
            setNumTorneos({
                activos: res.data.activos,
                total: res.data.torneo,
                finalizado: res.data.torneo - res.data.activos
            })
            setUser(res.data.user)
        }).catch(err => { })
    }, [])
    return (
        <Container fluid classname="mt-2">
            <h1 className="text-center mt-2">Dashboard</h1>
            <Dashboardpills></Dashboardpills>
            <Row className="mt-2">
                <Col md={6}>
                    <div className="card my-3 p-5 shadow-sm"><LineChart></LineChart></div>
                    <div className="card my-3 p-5 shadow-sm" >
                        <Row className="tarjeta">
                            <Col md={6} >
                                <h3>Usuarios Registrados</h3>
                                <h6>{user}</h6>
                            </Col>
                            <Col md={6} >
                                <h3>Usuarios Registrados</h3>
                                <h6>{user}</h6>
                            </Col>
                            <Col md={6} >
                                <h3>Usuarios Registrados</h3>
                                <h6>{user}</h6>
                            </Col>
                            <Col md={6} >
                                <h3>Usuarios Registrados</h3>
                                <h6>{user}</h6>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="card my-3 p-5 shadow-sm"><DoughnutChart torneos={numTorneos}></DoughnutChart></div>
                </Col>
                <Col md={12}>
                    <div className="card my-3 p-5 shadow-sm">
                        <h1>Notificaciones</h1>
                        <hr></hr>
                    </div>
                </Col>
            </Row>
        </Container >
    );
}

export default Home;
