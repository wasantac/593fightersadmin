import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../css/navegacion.scss';
import axios from 'axios'
const Navegacion = () => {
  const [user, setUser] = useState('')
  let handleLogOut = (e) => {
    localStorage.removeItem('token')
    window.location.reload()
  }
  useEffect(() => {
    axios.get(`/login/admin?token=${localStorage.getItem('token')}`).then(res => {
      setUser(res.data.user.username)
    }).catch(err => {
      console.log(err)
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    })
  }, [])
  return (
    <Navbar bg="dark" variant="dark" className="position-sticky">
      <Container>
        <Nav className="me-auto">
          <p className="text-white my-1">
            Version 0.2
          </p>
        </Nav>
        <Nav>
          <p className="text-white my-1 mx-2 d-flex align-items-center justify-content-center">
            {user}
          </p>
          <div className="text-white my-1 mx-2 btn btn-danger" onClick={handleLogOut}>
            Cerrar Sesión
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
