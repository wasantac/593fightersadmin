import React,{useState,useEffect} from 'react';
import { Container,Collapse,ListGroup } from 'react-bootstrap';
import Selector from '../Components/Selector';
import UsuarioItem from '../Components/UserItem';
import axios from 'axios';
const Usuarios = () => {
    const [users,setUsers] = useState(false)
    const [lista,setLista] = useState([])
    useEffect(() =>{
        axios.get(`/users?token=${localStorage.getItem('token')}`).then(res => {
            setLista(res.data)
        })
    },[])
    return (
        <Container>
            <h1 className="text-center">Usuarios</h1>
            <Selector value="Usuarios" onClick={() => setUsers(!users)}></Selector>
            <Collapse in={users} className="card">
                <ListGroup>
                    {lista.map((item,key) => {
                        return(<UsuarioItem key={key} usuario={item}></UsuarioItem>)
                    })}
                </ListGroup>
            </Collapse>
        </Container>
    );
}

export default Usuarios;
