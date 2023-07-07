import React from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignUpImage from '../../components/SignUpImage';
import BtnStyles from '../../styles/Button.module.css'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../../styles/LogInSignUpForm.module.css'
import axios from 'axios';
import { useRedirect } from '../../hooks/useRedirect';

const SignUpForm = () => {

    useRedirect('loggedIn');

    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: '',
    });

    const { username, password1, password2 } = signUpData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData);
            history.push('/login')
        } catch (error) {
            setErrors(error.response?.data)
        }
    }

    return (
        <Row className='align-items-center justify-content-center'>
            <Col className='col-12 col-md-8 col-lg-6'>
                <SignUpImage />
            </Col>
            <Col className='col-12 col-md-8 col-lg-6'>
                <h1 className={`text-center ${styles.Header}`}>Sign Up</h1>
                <hr/>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="username">
                    <Form.Label className='d-none'>Username</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    name='username'
                    value={username}
                    onChange={handleChange}
                    />
                    </Form.Group>

                    {errors.username?.map((message, idx) =>
                    <Alert variant='danger' key={idx}> { message } </Alert>
                    )}

                    <Form.Group className="mb-3" controlId="password1">
                    <Form.Label className='d-none'>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Password (Case-Sensitive)"
                    name='password1'
                    value={password1}
                    onChange={handleChange}
                    />
                    </Form.Group>

                    {errors.password1?.map((message, idx) =>
                    <Alert variant='danger' key={idx}> { message } </Alert>
                    )}

                    <Form.Group className="mb-3" controlId="password2">
                    <Form.Label className='d-none'>Confirm password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Confirm password (Case-Sensitive)"
                    name='password2'
                    value={password2}
                    onChange={handleChange}
                    />
                    </Form.Group>

                    {errors.password2?.map((message, idx) =>
                    <Alert variant='danger' key={idx}> { message } </Alert>
                    )}

                    <Button className={BtnStyles.ButtonStyle} type="submit">
                    Sign Up
                    </Button>

                    {errors.non_field_errors?.map((message, idx) => (
                        <Alert key={idx} variant='danger' >
                            {message}
                        </Alert>
                    ))}

                    <hr/>
                    <p>
                    Already have an account?
                    </p>
                    <Link to='/login'>
                        <Button className={BtnStyles.ButtonStyle} >
                        Log In 
                        </Button>
                    </Link>
                </Form>
        </Col>
    </Row>
    )
}

export default SignUpForm;