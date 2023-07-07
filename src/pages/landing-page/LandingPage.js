import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroImage from '../../components/HeroImage';
import styles from '../../styles/LandingPage.module.css'
import LifesortLogoWords from '../../components/LifesortLogoWords';
import Button from 'react-bootstrap/Button';
import BtnStyles from '../../styles/Button.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser, useSetCurrentUser } from '../../contexts/CurrentUserContext';
import axios from 'axios';


const LandingPage = () => {

    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    const handleLogout = async () => {
        try {
            await axios.post('dj-rest-auth/logout/');
            setCurrentUser(null);
        } catch (error) {
            // console.log(error)
        }
    };

    const loggedOutButtons = <>
            <span>
                <Link to='/login'>
                    <Button size='lg' className={BtnStyles.ButtonStyle}>
                        Log In
                    </Button>
                </Link>
            </span>
            <span>
                <Link to='/signup'>
                    <Button size='lg' className={BtnStyles.ButtonStyle} >
                        Sign Up
                    </Button>
                </Link>
            </span>
        </>

    const loggedInButtons = <>
        <span>
        <Link to='/dashboard'>
            <Button size='lg' className={BtnStyles.ButtonStyle}>
                Dashboard
            </Button>
        </Link>
        </span>
        <span>
            <Link to='/' onClick = {handleLogout}>
                <Button size='lg' className={BtnStyles.ButtonStyle} >
                    Log out
                </Button>
            </Link>
        </span>
    </>

    return (
        <Row className={`mx-auto ${styles.LandingPage} justify-content-center`}>
            <Col className='col-12 col-md-8 col-lg-6'>
                <HeroImage />
            </Col>
            <Col className='col-12 col-md-8 col-lg-6 '>
                <div className={styles.LifeSortLogo}>
                    <LifesortLogoWords  />
                    <p className={styles.LandingPageParagraph}>
                    Welcome to Lifesort, the ultimate app designed to revolutionize the way you organize your life.
                    Whether you're tackling simple daily tasks or tackling more significant projects,
                    Lifesort is here to streamline your productivity and bring order to your busy schedule.
                    We will even allow you to plan your holidays!
                    </p>
                </div>
            </Col>
            <Col className={`col-12 col-md-6 offset-lg-6 text-center ${styles.ButtonArea}`}>
                {currentUser ? loggedInButtons : loggedOutButtons}
            </Col>
        </Row>
    );
}

export default LandingPage;