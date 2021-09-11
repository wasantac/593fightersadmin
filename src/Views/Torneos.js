import React,{useState,useEffect} from 'react';
import {Container,Form,Row,Col,Collapse,ListGroup} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TorneoItem from '../Components/TorneoItem';
import axios from 'axios';
import Swal from 'sweetalert2';
import Selector from '../Components/Selector';
const Torneos = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [crear,setCrear] = useState(false);
    const [verT,setVer] = useState(false);
    const [torneos,setTorneos] = useState([]);
    useEffect(() =>{
        axios.get('/torneos').then(res =>{
            setTorneos(res.data)
        })
    },[])
    let handleCrear = (e) => {
        let titulo = e.target[0].value;
        let descripcion = e.target[2].value;
        let premio = e.target[4].value;
        let juego = e.target[3].value;
        let max = e.target[5].value;
        axios.post('/torneos',{
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
    return (
        <Container>
            <h1 className="text-center" >Torneos</h1>
            <Selector value="Crear Torneo" onClick={() => {
                setCrear(!crear)
            }}></Selector>
            <Collapse in={crear} className="card p-5 shadow">
            <Form onSubmit={handleCrear}>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre del Torneo</Form.Label>
                    <Form.Control type="text"  />
                    </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Fecha del Torneo</Form.Label>
                    <DatePicker className="form-control"selected={startDate} showTimeSelect onChange={(date) => 
                        setStartDate(date)} />
                </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Row>
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Juego</Form.Label>
                    <select className="form-select" aria-label="Default select example">
                    <option value="gg">Guilty Gear Strive</option>
                    <option value="db">Dragon Ball FighterZ</option>
                    <option value="otro">Otro</option>
                    </select>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Premio</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Máximo de Jugadores</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                </Col>
            </Row>
            <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-primary" type="submit">Guardar Torneo</button>
            </div>
            </Form>
            </Collapse>
            <Selector value="Ver Torneos" className="mt-5" onClick={() => {
                setVer(!verT)
            }}></Selector>
            <Collapse in={verT} className="card shadow">
            <ListGroup>
                {torneos.map((item,key) => {
                    return(<TorneoItem key={key} torneo={item}></TorneoItem>)
                })}
            </ListGroup>
            </Collapse>
            
        </Container>
    );
}

export default Torneos;
