import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/life-sort-logo-circle-logo.png'
import dashboard from'../assets/dashboard.svg'
import closed from '../assets/door-close-icon.svg'
import opened from '../assets/door-open-icon.svg'
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
                <Nav.Link className={styles.NavBarText} >
                        <img
                        src={ dashboard }
                        alt='Dashboard logo'
                        className={ styles.NavBarLogos }
                    />
                    <span className='align-bottom'>Dashboard</span>
                    </Nav.Link>
                <Nav.Link className={styles.NavBarText} >
                    <img
                        src={ opened }
                        alt='Dashboard logo'
                        className={ styles.NavBarLogos }
                    />
                    <span className='align-bottom'>Log in</span>
                    </Nav.Link>
                <Nav.Link className= {styles.NavBarText} >
                    <img
                        src={ closed }
                        alt='Dashboard logo'
                        className={ styles.NavBarLogos }
                        />
                        <span className='align-bottom'>Sign up</span>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
    </Navbar>
    )
};

export default NavBar;