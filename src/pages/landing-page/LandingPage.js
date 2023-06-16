import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import HeroImage from '../../components/HeroImage';
import styles from '../../styles/LandingPage.module.css'
import LifesortLogoWords from '../../components/LifesortLogoWords';
import Button from 'react-bootstrap/Button';
import BtnStyles from '../../App.module.css'


const LandingPage = () => {
    return (
        <Row className={`h-100 g-0 mx-auto ${styles.LandingPage}`}>
            <Col className='col-12 col-md-6'>
                <HeroImage />
            </Col>
            <Col className='col-12 col-md-6'>
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
            <Col className='col-12 col-md-4 offset-md-7 text-center'>
                <span>
                    <Button size='lg' className={BtnStyles.ButtonStyle}>
                        Log In
                    </Button>
                </span>
                <span>
                    <Button size='lg' className={BtnStyles.ButtonStyle} >
                        Sign Up
                    </Button>
                </span>
            </Col>
        </Row>
    )
}

export default LandingPage