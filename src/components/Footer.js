import React from 'react'
import styles from '../styles/Footer.module.css'
import { Col, Row } from 'react-bootstrap'
import logo from '../assets/life-sort-logo-words.svg'

const Footer = () => {
    return (
        <footer className={ styles.Footer }>
            <Row>
                <Col className='text-center'>
                <img
                src={ logo }
                alt='logo'
                className={ styles.FooterLogo }
                />
                </Col>
                <Col className='text-center'>
                Content here
                </Col>
                <Col className='text-center'>
                Social links here
                </Col>
            </Row>
        </footer>
    )
}

export default Footer