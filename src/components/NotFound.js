import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import NotFoundImage from '../assets/404-image.png'
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
    return (
        <Row className={`justify-content-center align-items-center ${styles.NotFound}`}>
            <Col className='col-12 col-md-5'>
                <Image src={NotFoundImage} fluid alt='Four cartoon people with question marks above their heads'></Image>
            </Col>
            <Col className='col-12 text-center'>
                <p>Sorry the page you are looking for does not exist.</p>
            </Col>
        </Row>
    )
}

export default NotFound