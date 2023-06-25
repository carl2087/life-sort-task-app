import React from 'react'
import Image from 'react-bootstrap/Image';
import loginImage from '../assets/log-in-image.png'

const LogInImage = () => {
    return (
        <Image
            src={loginImage}
            fluid
            alt='Male sat at computer in a cartoon style'
        />
    )
}

export default LogInImage