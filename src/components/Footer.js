import React from 'react'
import styles from '../styles/Footer.module.css'
import { Col, Row } from 'react-bootstrap'
import logo from '../assets/life-sort-logo-words.svg'
import FbookLogo from '../assets/facebook-square-icon.svg'
import TwitterLogo from '../assets/twitter-square-icon.svg'
import YouTubeLogo from '../assets/youtube-square-icon.svg'
import CurrentYear from './CurrentYear'

const Footer = () => {
    return (
        <>
        <span className={styles.FootSpacer}></span>
        <footer className={ styles.Footer }>
            <Row className='g-0 h-100'>
                <Col className='text-center align-self-center col-12 col-md-6'>
                    <img
                    src={ logo }
                    alt='Lifesort logo'
                    className={ styles.FooterLogo }
                    />
                </Col>
                <Col className='text-center align-self-center col-12 col-md-6'>
                    <span>
                    <a
                        href='https://en-gb.facebook.com/'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='Link to Facebook'
                        >
                        <img
                        src={ FbookLogo }
                        alt='Facebook logo'
                        className={ styles.FooterIcons }
                        />
                        </a>
                    </span>
                    <span>
                    <a
                        href='https://twitter.com/'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='Link to Twitter'
                        >
                        <img
                        src={ TwitterLogo }
                        alt='Twitter logo'
                        className={ styles.FooterIcons }
                        />
                        </a>
                    </span>
                    <span>
                        <a
                        href='https://www.youtube.com/index?feature=signin'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='Link to youtube'
                        >
                        <img
                        src={ YouTubeLogo }
                        alt='YouTube logo'
                        className={ styles.FooterIcons }
                        />
                        </a>
                    </span>
                </Col>
                <Row className='g-0'>
                    <Col className='text-center align-self-end col-12'>
                        <CurrentYear />
                    </Col>
                </Row>
            </Row>
        </footer>
        </>
    )
}

export default Footer