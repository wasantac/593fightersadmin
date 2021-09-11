import React from 'react';
import {ListGroup} from 'react-bootstrap'
import axios from 'axios';
import Swal from 'sweetalert2';
const UserItem = ({usuario}) => {
    let eliminar = (e) => {
        Swal.fire({
            title: '¿Deseas eliminar el usuario?',
            icon: 'info',
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              axios.delete(`/users/${usuario._id}?token=${localStorage.getItem('token')}`).then(res => {
                Swal.fire('¡Usuario Eliminado!', '', 'success').then(() => {
                    window.location.reload()
                })
              }).catch(err => {

              })
            }
          })
    }
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            <div className="d-flex align-items-center justify-content-center">{usuario.user} | {usuario.nombre} | {usuario.nick}</div>
            <div>
            <button className="btn btn-danger mx-1" onClick={eliminar}>Eliminar</button>
            </div>
        </ListGroup.Item>
    );
}

export default UserItem;
