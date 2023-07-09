import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/useRedirect';
import { axiosRequest } from '../../api/axiosDefaults';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import btnStyles from '../../styles/Button.module.css';
import styles from '../../styles/Auth.module.css';

const UserpasswordForm = () => {

    useRedirect('loggedOut');

    const history = useHistory();
    const { id } = useParams();
    const currentUser = useCurrentUser();

    const [userData, setUserData] = useState({
        new_password1: '',
        new_password2: '',
    });

    const {new_password1, new_password2} = userData;

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        if (currentUser.profile_id?.toString() !== id) {
            history.push('/')
        }
    }, [currentUser, history, id])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRequest.post('/dj-rest-auth/password/change/', userData);
            history.goBack();
        } catch (error) {
            setErrors(error.response?.data);
        }
    };

    return (
        <Row className={`justify-content-center ${styles.AuthForms}`}>
            <Col className='col-12 col-md-7'>
            <Form>
            <Form.Group>
                <Form.Label>New password</Form.Label>
                <Form.Control
                    placeholder="New password"
                    type="password"
                    value={new_password1}
                    onChange={handleChange}
                    name="new_password1"
                />
            </Form.Group>

            {errors?.new_password1?.map((message, idx) => (
                <Alert key={idx} variant="danger">
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control
                    placeholder="Confirm new password"
                    type="password"
                    value={new_password2}
                    onChange={handleChange}
                    name="new_password2"
                />
            </Form.Group>

            {errors?.new_password2?.map((message, idx) => (
                <Alert key={idx} variant="danger">
                    {message}
                </Alert>
            ))}

            <Button
                className={`${btnStyles.ButtonStyle}`}
                onClick={() => history.goBack()}
                >
                Cancel
                </Button>
                <Button
                type="submit"
                className={`${btnStyles.ButtonStyle}`}
                onClick={handleSubmit}
                >
                Save
            </Button>

            </Form>
            </Col>
        </Row>
    );
}

export default UserpasswordForm;