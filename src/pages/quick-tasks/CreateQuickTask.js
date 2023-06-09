import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import styles from '../../styles/CreateTasks.module.css';
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRequest } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/useRedirect';

const CreateQuickTask = () => {

    useRedirect('loggedOut');

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const [taskData, setTaskData] = useState({
        due_date: '',
        completed_state: 'In progress',
        priority_state: 'Low',
        title: '',
        description: '',
    });

    const {
        due_date,
        completed_state,
        priority_state,
        title,
        description,
    } = taskData;

    const handleChange = (event) => {
        setTaskData({
            ...taskData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('due_date', due_date);
        formData.append('completed_state', completed_state);
        formData.append('priority_state', priority_state);
        formData.append('title', title);
        formData.append('description', description);

        try {
            await axiosRequest.post('/quicktask/', formData);
            history.push('/dashboard')
        } catch (error) {
            if (error.response?.status !== 401) {
                setErrors(error.response.data)
            }
        }
    };

    return (
        <Row className='align-items-center justify-content-center'>
            <Col className='col-12 col-md-8 col-lg-6'>
            <h1 className={`text-center ${styles.Header}`}>Create quick task</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label >Title</Form.Label>
                    <Form.Control
                    placeholder="Title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    />
                </Form.Group>

                {errors?.title?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label >Description of task</Form.Label>
                    <Form.Control
                    placeholder="Description"
                    as='textarea'
                    rows={6}
                    name="description"
                    value={description}
                    onChange={handleChange}
                    />
                </Form.Group>

                {errors?.description?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3" controlId="due_date">
                    <Form.Label >Due date</Form.Label>
                    <Form.Control
                    type='datetime-local'
                    name="due_date"
                    value={due_date}
                    onChange={handleChange}
                    />
                </Form.Group>

                {errors?.due_date?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3" controlId="priority_state">
                    <Form.Label >Priority</Form.Label>
                    <Form.Select
                        as="select"
                        name="priority_state"
                        onChange={handleChange}
                        value={priority_state}
                    >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    </Form.Select>
                </Form.Group>

                {errors?.priority_state?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3" controlId="completed_state">
                    <Form.Label >Task Completed?</Form.Label>
                    <Form.Select
                        as="select"
                        name="completed_state"
                        onChange={handleChange}
                        value={completed_state}
                    >
                    <option value="In progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Overdue">Overdue</option>
                    </Form.Select>
                </Form.Group>

                {errors?.completed_state?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Row>
                    <Col className="xs-12 text-center">
                        {errors.non_field_errors?.map((message, idx) => 
                        <Alert key={idx} className="mt-3" variant="danger">
                            {message}
                        </Alert>
                        )}
                        <Button
                        className={`${btnStyles.ButtonStyle}`}
                        type="submit"
                        >
                            Create quick task
                        </Button>
                        <Button
                            className={`${btnStyles.ButtonStyle} `}
                            onClick={() => history.goBack()}
                        >
                            Cancel
                        </Button>
                    </Col>
                </Row>

            </Form>
        </Col>
    </Row>
    );
}

export default CreateQuickTask;