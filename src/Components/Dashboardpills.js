import React,{useEffect,useState} from 'react';
import {Row,Col} from 'react-bootstrap';
import axios from 'axios';
import {GiTrophyCup,FaUser,FaMoneyBillAlt,FaTwitch} from 'react-icons/all'
import '../css/pill.scss'
const Dashboardpills = () => {
    const [numTorneos,setNumTorneos] =useState(0);
    const [numUsers,setNumUsers] = useState(0);
    useEffect(() => {
        axios.get('/torneos/count').then(res => {
            setNumTorneos(res.data.torneo)
            setNumUsers(res.data.user)
        }).catch(err => {})
    },[])

    return (
        <Row className="text-white">
            <Col>
                <div className="bg-danger rounded p-3 d-flex align-items-center justify-content-around">
                    <h3>Torneos <GiTrophyCup></GiTrophyCup></h3>
                    <h3>{numTorneos}</h3>
                </div>
            </Col>
            <Col>
                <div className="bg-warning rounded p-3 d-flex align-items-center justify-content-around">
                    <h3>Usuarios <FaUser></FaUser></h3>
                    <h3>{numUsers}</h3>
                </div>
            </Col>
            <Col>
                <div className="bg-success rounded p-3 d-flex align-items-center justify-content-around">
                    <h3>Ganancias <FaMoneyBillAlt></FaMoneyBillAlt></h3>
                    <h3>$...</h3>
                </div>
            </Col>
            <Col>
                <div className="morado rounded p-3 d-flex align-items-center justify-content-around">
                    <h3>Subs <FaTwitch></FaTwitch></h3>
                    <h3>...</h3>
                </div>
            </Col>
        </Row>
    );
}

export default Dashboardpills;
