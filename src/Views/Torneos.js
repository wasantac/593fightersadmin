import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Collapse, ListGroup } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TorneoItem from '../Components/TorneoItem';
import axios from 'axios';
import Swal from 'sweetalert2';
import Selector from '../Components/Selector';
const Torneos = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [abrir, setAbrir] = useState({
        crear: false,
        verTorneos: false,
        editar: false,
        participantes: false
    });
    const [torneos, setTorneos] = useState([]);
    const [torneo, setTorneo] = useState({
        titulo: "",
        descripcion: "",
        juego: "",
        premio: "",
        max: 0
    })
    const [escoger, setEscoger] = useState("")
    useEffect(() => {
        axios.get('/torneos').then(res => {
            setTorneos(res.data)
            console.log(res.data)
        })
    }, [])
    let handleCrear = (e) => {
        let titulo = e.target[0].value;
        let descripcion = e.target[2].value;
        let premio = e.target[4].value;
        let juego = e.target[3].value;
        let max = e.target[5].value;
        axios.post('/torneos', {
            token: localStorage.getItem('token'),
            titulo,
            descripcion,
            premio,
            juego,
            max,
            fecha: startDate
        }).then(res => {
            Swal.fire(
                'Torneo Creado',
                `${titulo}`,
                'success'
            ).then(() => {
                window.location.reload()
            })
        }).catch(err => {
            Swal.fire(
                'Error',
                `${err}`,
                'error'
            ).then(() => {
                window.location.reload()
            })
        })
        e.preventDefault();
    }
    let changeEdit = (e) => {
        setEscoger(e.target.value);
        let datos = JSON.parse(e.target.value)
        setTorneo({
            ...torneo,
            titulo: datos.titulo,
            descripcion: datos.descripcion,
            premio: datos.premio,
            juego: datos.juego,
            max: datos.max,
        })
        setStartDate(new Date(datos.fecha));
        console.log(torneo)
    }
    let handleEdit = (e) => {
        let datos = JSON.parse(escoger)
        axios.put(`/torneos?token=${localStorage.getItem('token')}`, {
            ...torneo,
            fecha: startDate,
            id: datos._id
        }).then(res => {
            Swal.fire(
                'Torneo Actualizado',
                `${torneo.titulo}`,
                'success'
            ).then(() => {
                window.location.reload()
            })
        }).catch(err => {
            Swal.fire(
                'Error',
                `${err}`,
                'error'
            ).then(() => {
                window.location.reload()
            })
        });
        e.preventDefault();
    }
    return (
        <Container>
            <h1 className="text-center" >Torneos</h1>
            <Selector value="Crear Torneo" onClick={() => {
                setAbrir({ ...abrir, crear: !abrir.crear })
            }}></Selector>
            <Collapse in={abrir.crear} className="card p-5 shadow">
                <Form onSubmit={handleCrear}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nombre del Torneo</Form.Label>
                                <Form.Control type="text" required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Fecha del Torneo</Form.Label>
                                <DatePicker className="form-control" selected={startDate} showTimeSelect onChange={(date) =>
                                    setStartDate(date)} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={3} required />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Juego</Form.Label>
                                <select className="form-select" aria-label="Default select example" required>
                                    <option value="gg">Guilty Gear Strive</option>
                                    <option value="db">Dragon Ball FighterZ</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Premio</Form.Label>
                                <Form.Control type="text" required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Máximo de Jugadores</Form.Label>
                                <Form.Control type="number" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-flex align-items-center justify-content-center">
                        <button className="btn btn-primary" type="submit">Guardar Torneo</button>
                    </div>
                </Form>
            </Collapse>
            <Selector value="Editar Torneos" className="mt-5" onClick={() => {
                setAbrir({ ...abrir, editar: !abrir.editar })
            }}></Selector>
            <Collapse in={abrir.editar} className="card shadow p-5">
                <Form onSubmit={handleEdit}>
                    <Row>
                        <Col>
                            <Form.Label>Escoger Torneo</Form.Label>
                            <select className="form-select" onChange={changeEdit} value={escoger}>
                                {torneos.map((item, key) => {
                                    return (<option key={key} value={JSON.stringify(item)}>{item.titulo}</option>)
                                })}
                            </select>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nombre del Torneo</Form.Label>
                                <Form.Control type="text" required value={torneo.titulo} onChange={e => {
                                    setTorneo({ ...torneo, titulo: e.target.value })
                                }} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Fecha del Torneo</Form.Label>
                                <DatePicker className="form-control" selected={startDate} showTimeSelect onChange={(date) =>
                                    setStartDate(date)} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={3} required value={torneo.descripcion} onChange={e => {
                            setTorneo({ ...torneo, descripcion: e.target.value })
                        }} />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Juego</Form.Label>
                                <select className="form-select" aria-label="Default select example" value={torneo.juego} onChange={e => setTorneo({ ...torneo, juego: e.target.value })} required>
                                    <option value="gg">Guilty Gear Strive</option>
                                    <option value="db">Dragon Ball FighterZ</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Premio</Form.Label>
                                <Form.Control type="text" required value={torneo.premio} onChange={e => setTorneo({ ...torneo, premio: e.target.value })} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Máximo de Jugadores</Form.Label>
                                <Form.Control type="number" required value={torneo.max} onChange={e => {
                                    setTorneo({ ...torneo, max: e.target.value })
                                }} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-flex align-items-center justify-content-center">
                        <button className="btn btn-primary" type="submit">Editar Torneo</button>
                    </div>
                </Form>
            </Collapse>
            <Selector value="Ver Torneos" className="mt-5" onClick={() => {
                setAbrir({ ...abrir, verTorneos: !abrir.verTorneos })
            }}></Selector>
            <Collapse in={abrir.verTorneos} className="card shadow">
                <ListGroup>
                    {torneos.map((item, key) => {
                        return (<TorneoItem key={key} torneo={item}></TorneoItem>)
                    })}
                </ListGroup>
            </Collapse>
            <Selector value="Eliminar Participantes" className="mt-5" onClick={() => {
                setAbrir({ ...abrir, participantes: !abrir.participantes })
            }}></Selector>
            <Collapse in={abrir.participantes} className="card shadow">
                <select className="form-select" onChange={changeEdit} value={escoger}>
                    {torneos.map((item, key) => {
                        return (<option key={key} value={JSON.stringify(item)}>{item.titulo}</option>)
                    })}
                </select>
            </Collapse>


        </Container >
    );
}

export default Torneos;
