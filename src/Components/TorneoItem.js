import React from 'react';
import {ListGroup} from 'react-bootstrap'
import CsvDownload from 'react-json-to-csv'
import axios from 'axios';
import Swal from 'sweetalert2';
const TorneoItem = ({torneo}) => {
    let eliminar = (e) => {
        Swal.fire({
            title: '¿Deseas eliminar el torneo?',
            icon: 'info',
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              axios.delete(`/torneos/${torneo._id}?token=${localStorage.getItem('token')}`).then(res => {
                Swal.fire('¡Torneo Eliminado!', '', 'success').then(() => {
                    window.location.reload()
                })
              }).catch(err => {

              })
            }
          })
    }
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            <div className="d-flex align-items-center justify-content-center">{torneo.titulo}</div>
            <div>
            <CsvDownload className="btn btn-success mx-1" filename={`${torneo.titulo}.csv`} data={torneo.participantes}>Descargar csv</CsvDownload>
            <button className="btn btn-danger mx-1" onClick={eliminar}>Elminiar</button>
            </div>
        </ListGroup.Item>
    );
}

export default TorneoItem;
