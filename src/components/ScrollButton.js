import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import image from '../assets/round-line-top-arrow-icon.svg'
import style from '../styles/ScrollButton.module.css'

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Image
        className={style.ScrollButton}
        src={image}
        onClick={scrollToTop}
        style={{display: visible ? 'inline' : 'none'}}
        alt='Scroll to top button'
        />
    )
}

export default ScrollButton