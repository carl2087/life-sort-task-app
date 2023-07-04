import React from 'react'
import Image from 'react-bootstrap/Image';
import image from '../assets/sign-up-image.png'

const SignUpImage = () => {
    return (
        <Image
            src={image}
            fluid
            alt='cartoon woman typing on a large phone'
        />
    )
}

export default SignUpImage