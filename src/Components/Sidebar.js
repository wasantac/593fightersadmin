import React from 'react';
import '../css/sidebar.scss';
import { ListGroup } from 'react-bootstrap';
import logo from '../GoGoNBG.png'
const Sidebar = () => {
    return (
        <div className="h-100 bg-dark position-sticky">
            <ListGroup variant="flush">
                <ListGroup.Item className="logo-li sidebar-item-no">
                    <img src={logo} alt="logo" className="logo-img d-block"></img>
                </ListGroup.Item>
                <ListGroup.Item className="sidebar-item" action href="/">Dashboard</ListGroup.Item>
                <ListGroup.Item className="sidebar-item" action href="/torneos">Torneos</ListGroup.Item>
                <ListGroup.Item className="sidebar-item" action href="/usuarios">Usuarios</ListGroup.Item>
                <ListGroup.Item className="sidebar-item" action href="/calendario">Calendario</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Sidebar;
