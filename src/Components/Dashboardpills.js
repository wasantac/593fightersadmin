import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaMoneyBillAlt, FaFacebook } from 'react-icons/all'
import '../css/pill.scss'
const Dashboardpills = () => {

    return (
        <Row className="text-white">

            <Col>
                <div className="bg-success rounded p-3 d-flex align-items-center justify-content-around">
                    <h3>Ganancias <FaMoneyBillAlt></FaMoneyBillAlt></h3>
                    <h3>$20</h3>
                </div>
            </Col>
            <Col>
                <div className="bg-primary rounded p-3 d-flex align-items-center justify-content-around">
                    <h3>Seguidores <FaFacebook></FaFacebook></h3>
                    <h3>1000</h3>
                </div>
            </Col>
        </Row>
    );
}

export default Dashboardpills;
