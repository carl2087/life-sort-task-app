import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/life-sort-logo-circle-logo.png'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
    <Navbar expand="md" className={ styles.NavBar }>
            <Navbar.Brand >
                <img
                src={ logo }
                alt='logo'
                height='50'
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-start">
                <Nav.Link >Dashboard</Nav.Link>
                <Nav.Link >Login</Nav.Link>
                <Nav.Link >Sign up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
    </Navbar>
    )
};

export default NavBar;