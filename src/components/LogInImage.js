import React from 'react'
import { Image } from 'react-bootstrap'
import image from '../assets/log-in-image.png'

const LogInImage = () => {
    return (
        <Image
            src={image}
            fluid
            alt='Male sat at computer in a cartoon style'
        />
    )
}

export default LogInImage