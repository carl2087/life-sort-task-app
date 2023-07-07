import React  from 'react';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BtnStyles from '../../styles/Button.module.css'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styles from '../../styles/LogInSignUpForm.module.css'
import axios from 'axios';
import LogInImage from '../../components/LogInImage';
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/useRedirect';
import { setTokenTimeStamp } from '../../utils/utils';

const LogInForm = () => {

    const setCurrentUser = useSetCurrentUser();

    useRedirect('loggedIn');

    const [signInData, setSignInData] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const { username, password } = signInData;

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post('/dj-rest-auth/login/', signInData);
            setCurrentUser(data.user)
            setTokenTimeStamp(data);
            history.goBack();
        } catch (error) {
            setErrors(error.response?.data)
        }
    }

    return (
        <Row className='align-items-center'>
            <Col className='col-12 col-md-8 col-lg-6'>
                <LogInImage />
            </Col>
            <Col className='col-12 col-md-8 col-lg-6'>
                <h1 className={`text-center ${styles.Header}`}>Log In</h1>
                <hr/>
                <Form onSubmit={handleSubmit} >
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

                    <Form.Group className="mb-3" controlId="password">
                    <Form.Label className='d-none'>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Password (Case-Sensitive)"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    />
                    </Form.Group>

                    {errors.password?.map((message, idx) =>
                    <Alert variant='danger' key={idx}> { message } </Alert>
                    )}

                    <Button className={BtnStyles.ButtonStyle} type="submit">
                    Log In
                    </Button>

                    {errors.non_field_errors?.map((message, idx) => (
                        <Alert key={idx} variant='danger' >
                            {message}
                        </Alert>
                    ))}

                    <hr/>
                    <p>
                    Don't have an account?
                    </p>
                    <Link to='/signup'>
                        <Button className={BtnStyles.ButtonStyle} >
                        Sign Up
                        </Button>
                    </Link>
                </Form>
        </Col>
    </Row>
    );
};

export default LogInForm;