import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Row,Col} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import '../css/login.scss';

const Login = () => {
    const history = useHistory();
    let handleSubmit = (e) => {
        history.push('/');
        e.preventDefault();
    }
    return (
        <div className="fondo-login">
            <div className="login-form">
                <div className="card shadow">
                    
                <Form className="px-5 pt-5 pb-3 tarjeta" onSubmit={handleSubmit}>
                <h1 className="text-center">593 Admin</h1>
                <Row>
                <Col md={12}>
                <Form.Group className="mb-2" controlId="username">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" name="username" required></Form.Control>
                </Form.Group> 
                </Col>
                <Col md={12}>
                <Form.Group className="mb-2">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name="password" required></Form.Control>
                </Form.Group> 
                </Col>
                </Row>
                <div className="d-flex align-items-center justify-content-center flex-column">
                <Button type="submit" >Iniciar Sesión
                </Button>
                </div>
                </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;
