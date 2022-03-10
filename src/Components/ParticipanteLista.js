import axios from "axios";
import React from "react";
import { ListGroupItem, ListGroup } from "react-bootstrap";

const ParticipanteLista = ({ participantes, id, setParticipantes }) => {
    return (
        <>
            {!participantes ? (
                <div></div>
            ) : (
                <ListGroup>
                    {participantes.map((item) => {
                        let handleClick = (e) => {
                            axios
                                .delete(
                                    `/torneos/participante/${id}?token=${localStorage.getItem(
                                        "token"
                                    )}`,
                                    {
                                        data: {
                                            nombre: item.nombre,
                                            nick: item.nick,
                                            correo: item.correo,
                                            whats: item.whats,
                                        },
                                    }
                                )
                                .then((res) => {
                                    setParticipantes(
                                        participantes.filter(
                                            (par) =>
                                                par.nick !== item.nick &&
                                                par.nombre !== item.nombre
                                        )
                                    );
                                })
                                .catch((err) => {});
                        };

                        return (
                            <ListGroupItem
                                key={item.nick}
                                className="d-flex align-items-center justify-content-between"
                            >
                                <span>
                                    {item.nick} | {item.nombre}
                                </span>
                                <span>
                                    <button
                                        className="btn btn-danger"
                                        onClick={handleClick}
                                    >
                                        Eliminar
                                    </button>
                                </span>
                            </ListGroupItem>
                        );
                    })}
                </ListGroup>
            )}
        </>
    );
};

export default ParticipanteLista;
