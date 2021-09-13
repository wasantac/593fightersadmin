import React from 'react';
import {Container,Form,Button} from 'react-bootstrap'
import axios from 'axios';
import Swal from 'sweetalert2';
const Calendario = () => {
    let handleSubmit = (e) => {
        let lunes = e.target[0].value;
        let martes = e.target[1].value;
        let miercoles = e.target[2].value;
        let jueves = e.target[3].value;
        let viernes = e.target[4].value;
        let sabado = e.target[5].value;
        let domingo = e.target[6].value;
        axios.post('/calendario',{
            lunes,
            martes,
            miercoles,
            jueves,
            viernes,
            sabado,
            domingo,
            token : localStorage.getItem('token')
        }).then(res => {
            Swal.fire(
                'Calendario Actualizado',
                `Se ha actualizado el calendario de la semana`,
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
            <h1 className="text-center">Calendario</h1>
            <Form className="card p-5 shadow" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Lunes</Form.Label>
                    <Form.Control as="textarea" rows={3}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Martes</Form.Label>
                    <Form.Control as="textarea" rows={3}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Miércoles</Form.Label>
                    <Form.Control as="textarea" rows={3}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Jueves</Form.Label>
                    <Form.Control as="textarea" rows={3}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Viernes</Form.Label>
                    <Form.Control as="textarea" rows={3}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Sábado</Form.Label>
                    <Form.Control as="textarea" rows={3}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Domingo</Form.Label>
                    <Form.Control as="textarea" rows={3}  />
                </Form.Group>
                <div className="d-flex align-items-center justify-content-center flex-column">
                <Button type="submit" >Actualizar Calendario
                </Button>
                </div>
            </Form>
        </Container>
    );
}

export default Calendario;
