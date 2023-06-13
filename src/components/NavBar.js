import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
    <Navbar expand="md">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="#home">Login</Nav.Link>
                <Nav.Link href="#link">Sign up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
};

export default NavBar;