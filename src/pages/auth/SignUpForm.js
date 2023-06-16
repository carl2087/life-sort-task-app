import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignUpImage from '../../components/SignUpImage';
import BtnStyles from '../../styles/Button.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const SignUpForm = () => {
    return (
        <Row className='align-items-center justify-content-center'>
            <Col className='col-12 col-md-8 col-lg-6'>
                <SignUpImage />
            </Col>
            <Col className='col-12 col-md-8 col-lg-6'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
                        Passwords are case-sensitive
                    </Form.Text>
                    </Form.Group>
                    <Button className={BtnStyles.ButtonStyle} type="submit">
                    Sign In
                    </Button>
                    <br/>
                    <hr/>
                    <p>
                    Already have an account?
                    </p>
                    <Link to='/login'>
                        <Button className={BtnStyles.ButtonStyle} type="submit">
                        Log In 
                        </Button>
                    </Link>
                </Form>
        </Col>
    </Row>
    )
}

export default SignUpForm