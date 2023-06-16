import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/life-sort-logo-circle-logo.png'
import dashboard from'../assets/dashboard.svg'
import signup from '../assets/sign-up.svg'
import opened from '../assets/door-open-icon.svg'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = () => {
    return (
    <Navbar expand="md" className={ styles.NavBar }>
            <NavLink to='/dashboard'>
                <Navbar.Brand >
                    <img
                    src={ logo }
                    alt='logo'
                    className= { styles.NavBarLogo }
                    />
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-start">
                <NavLink className={styles.NavBarText} to='/dashboard'>
                        <img
                        src={ dashboard }
                        alt='Dashboard logo'
                        className={ styles.NavBarIcons }
                    />
                    <span className='align-bottom'>Dashboard</span>
                </NavLink>
                <NavLink className={styles.NavBarText} to='/login' >
                    <img
                        src={ opened }
                        alt='Dashboard logo'
                        className={ styles.NavBarIcons }
                    />
                    <span className='align-bottom'>Log In</span>
                </NavLink>
                <NavLink className= {styles.NavBarText} to='/signup' >
                    <img
                        src={ signup }
                        alt='Dashboard logo'
                        className={ styles.NavBarIcons }
                        />
                        <span className='align-bottom'>Sign Up</span>
                </NavLink>
            </Nav>
            </Navbar.Collapse>
    </Navbar>
    )
};

export default NavBar;