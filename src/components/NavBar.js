import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/life-sort-logo-circle-logo.png'
import dashboard from'../assets/dashboard.png'
import opened from '../assets/door-open-icon.png'
import signup from '../assets/door-open-icon.png'
import closed from'../assets/door-close-icon.png'
import styles from '../styles/NavBar.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import Avatar from './Avatar';
import axios from 'axios';
import useClickOutside from '../hooks/useClickOutside';
import { removeTokenTimestamp } from '../utils/utils';

const NavBar = () => {

    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const {expanded, setExpanded, ref} = useClickOutside();

    const handleLogout = async () => {
        try {
            await axios.post('dj-rest-auth/logout/');
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (error) {
            // console.log(error)
        }
    };

    const createTaskMenu = (
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
    )

    const loggedInIcons = <>
                <NavLink className={`${styles.NavBarText} ${styles.NavLink}`} activeClassName={styles.Active} to='/dashboard'>
                    <img
                        src={ dashboard }
                        alt='Dashboard logo'
                        className={ styles.NavBarIcons }
                    />
                    <span className='align-bottom'>Dashboard</span>
                </NavLink>
                <NavLink className={`${styles.NavBarText} ${styles.NavLink}`} to='/' onClick={handleLogout}>
                    <img
                        src={ closed }
                        alt='Closed door logo'
                        className={ styles.NavBarIcons }
                    />
                    <span className='align-bottom'>Log out</span>
                </NavLink>
                <NavLink className={`${styles.NavBarText} ${styles.NavLink}`} to={`/profiles/${currentUser?.profile_id}`} onClick={() =>{}}>
                    <Avatar src={currentUser?.profile_image}/>
                    <span className='align-bottom'>Profile</span>
                </NavLink>
    </>

    const loggedOutIcons = (
        <>
            <NavLink className={`${styles.NavBarText} ${styles.NavLink}`} activeClassName={styles.Active} to='/login' >
                <img
                    src={ opened }
                    alt='Open Door logo'
                    className={ styles.NavBarIcons }
                />
                <span className='align-bottom'>Log In</span>
            </NavLink>
            <NavLink className={`${styles.NavBarText} ${styles.NavLink}`} activeClassName={styles.Active} to='/signup' >
                <img
                    src={ signup }
                    alt='Pencil and Paper logo'
                    className={ styles.NavBarIcons }
                    />
                    <span className='align-bottom'>Sign Up</span>
            </NavLink>
        </>
    )

    return (
        <Navbar expanded={expanded} expand="md" className={ styles.NavBar }>
                <NavLink to='/'>
                    <Navbar.Brand >
                        <img
                        src={ logo }
                        alt='logo'
                        className= { styles.NavBarLogo }
                        />
                    </Navbar.Brand>
                </NavLink>
                { currentUser && createTaskMenu }
                <Navbar.Toggle
                onClick={() => setExpanded(!expanded)}
                aria-controls="basic-navbar-nav"
                ref={ref}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto text-start">
                {currentUser ? loggedInIcons : loggedOutIcons}
                </Nav>
                </Navbar.Collapse>
        </Navbar>
        )
};

export default NavBar;