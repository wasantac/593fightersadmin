import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Dashboardpills from '../Components/Dashboardpills';
import LineChart from '../Components/LineChart';
import DoughnutChart from '../Components/DoughnutChart';
const Home = () => {

    return (
        <Container fluid classname="mt-2">
            <h1 className="text-center mt-2">Dashboard</h1>
            <Dashboardpills></Dashboardpills>
            <Row className="mt-2">
                <Col md={6}>
                    <div className="card my-3 p-5 shadow-sm"><LineChart></LineChart></div>
                    <div className="card my-3 p-5 shadow-sm">xd</div>
                </Col>
                <Col md={6}>
                    <div className="card my-3 p-5 shadow-sm"><DoughnutChart></DoughnutChart></div>
                </Col>
                <Col md={12}>
                    <div className="card my-3 p-5 shadow-sm">xd</div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
