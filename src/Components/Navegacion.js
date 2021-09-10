import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
const Navegacion = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Version 0.1</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link eventKey={2} href="#memes">
            Usuario
        </Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
}

export default Navegacion;
