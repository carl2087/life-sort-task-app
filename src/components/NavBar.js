import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/life-sort-logo-circle-logo.png'
import dashboard from'../assets/dashboard.svg'
import signup from '../assets/sign-up.svg'
import opened from '../assets/door-open-icon.svg'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {

    const currentUser = useCurrentUser();

    const loggedInIcons = <>{currentUser?.username}</>

    const loggedOutIcons = (
        <>
            <NavLink className={`${styles.NavBarText} ${styles.NavLink}`} activeClassName={styles.Active} to='/login' >
                <img
                    src={ opened }
                    alt='Dashboard logo'
                    className={ styles.NavBarIcons }
                />
            <span className='align-bottom'>Log In</span>
            </NavLink>
            <NavLink className={`${styles.NavBarText} ${styles.NavLink}`} activeClassName={styles.Active} to='/signup' >
                <img
                    src={ signup }
                    alt='Dashboard logo'
                    className={ styles.NavBarIcons }
                    />
                    <span className='align-bottom'>Sign Up</span>
            </NavLink>
        </>
    )

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
                <NavLink className={`${styles.NavBarText} ${styles.NavLink}`} activeClassName={styles.Active} to='/dashboard'>
                        <img
                        src={ dashboard }
                        alt='Dashboard logo'
                        className={ styles.NavBarIcons }
                    />
                    <span className='align-bottom'>Dashboard</span>
                </NavLink>
                <NavDropdown
                    title="Create Task"
                    id="basic-nav-dropdown"
                    drop='down-centered'
                    className={ `${styles.NavBarText} ${styles.NavBarDropdown}`}
                    
                >
                    <NavDropdown.Item  >
                        <NavLink to='/createquicktask'
                        className={styles.NavBarDropdownMenu}>
                        Quick Task
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <NavLink to='/createcustomtask'
                        className={styles.NavBarDropdownMenu}>
                            Custom Task
                        </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <NavLink to='/createholidaytask'
                        className={styles.NavBarDropdownMenu}>
                            Holiday Task
                        </NavLink>
                    </NavDropdown.Item>
                </NavDropdown>
            {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
            </Navbar.Collapse>
    </Navbar>
    )
};

export default NavBar;