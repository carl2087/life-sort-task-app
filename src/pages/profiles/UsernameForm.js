import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser, useSetCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosResponse } from '../../api/axiosDefaults';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import btnStyles from '../../styles/Button.module.css'
import styles from '../../styles/Auth.module.css'

const UsernameForm = () => {

    const [username, setUsername] = useState('');
    const [errors, setErrors] = useState({});

    const history = useHistory();
    const { id } = useParams();
    
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    useEffect(() => {
        if (currentUser?.profile_id?.toString() === id) {
            setUsername(currentUser.username);
        } else {
            history.push('/');
        }
    }, [currentUser, history, id])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosResponse.put('/dj-rest-auth/user/', {
                username,
            });
            setCurrentUser((prevUser) => ({
                ...prevUser,
                username,
            }));
            history.goBack();
        } catch (error) {
            console.log(error)
            setErrors(error.response?.data);
        }
    };

    return (
        <Row className={`justify-content-center ${styles.AuthForms}`}>
            <Col className='col-12 col-md-7'>
            <Form>
            <Form.Group>
                <Form.Label>Change username</Form.Label>
                <Form.Control
                placeholder="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
                <Alert key={idx} variant="danger">
                {message}
                </Alert>
            ))}
            <Button
                className={btnStyles.ButtonStyle}
                onClick={() => history.goBack()}
            >
                Cancel
            </Button>
            <Button
                className={btnStyles.ButtonStyle}
                type="submit"
                onClick={handleSubmit}
            >
                Save
            </Button>
            </Form>
        </Col>
    </Row>
    )
}

export default UsernameForm