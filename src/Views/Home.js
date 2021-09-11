import React from 'react';
import { Container } from 'react-bootstrap';
import Dashboardpills from '../Components/Dashboardpills';
const Home = () => {
    return (
        <Container>
            <h1 className="text-center">Dashboard</h1>
            <Dashboardpills></Dashboardpills>
        </Container>
    );
}

export default Home;
