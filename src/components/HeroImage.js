
import React from 'react'
import Image from 'react-bootstrap/Image';
import hero from '../assets/hero-image.png'

const HeroImage = () => {
    return (
        <Image src={hero} fluid />
    )
}

export default HeroImage