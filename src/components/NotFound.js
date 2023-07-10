import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NotFoundImage from '../assets/404-image.png';
import styles from '../styles/NotFound.module.css';
import BtnStyles from '../styles/Button.module.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const NotFound = () => {
    return (
        <Row className={`justify-content-center align-items-center ${styles.NotFound}`}>
            <Col className='col-12 col-md-5'>
                <Image src={NotFoundImage} fluid alt='Four cartoon people with question marks above their heads'></Image>
            </Col>
            <Col className='col-12 text-center'>
                <p>Sorry the page you are looking for does not exist.</p>
                <Link to='/dashboard'>
                    <Button size='lg' className={BtnStyles.ButtonStyle}>
                        Dashboard
                    </Button>
                </Link>
            </Col>
        </Row>
    )
}

export default NotFound;