import React from 'react';
import '../css/sidebar.scss';
import { ListGroup } from 'react-bootstrap';
import logo from '../593logo.png'
const Sidebar = () => {
    return (
        <div className="h-100 bg-dark">
            <ListGroup variant="flush">
                <ListGroup.Item className="logo-li sidebar-item-no">
                <img src={logo} alt="logo" className="logo-img d-block"></img>
                </ListGroup.Item>
                <ListGroup.Item className="sidebar-item">Dashboard</ListGroup.Item>
                <ListGroup.Item className="sidebar-item">Torneos</ListGroup.Item>
                <ListGroup.Item className="sidebar-item">Usuarios</ListGroup.Item>
                <ListGroup.Item className="sidebar-item">Calendario</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Sidebar;
