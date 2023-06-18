import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from '../../styles/CreateTasks.module.css'
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRequest } from "../../api/axiosDefaults";

function CreateCustomTask() {

    const currentUser = useCurrentUser();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [errors, setErrors] = useState({});

    const [taskData, setTaskData] = useState({
        due_date: '',
        start_date: '',
        completed_state: 'In progress',
        priority_state: 'Low',
        work_or_leisure: 'Leisure',
        description: '',
        title: '',
        budget: 0,
        travel_required: false,
        entertainment: false,
    })

    const {
        due_date,
        start_date,
        completed_state,
        priority_state,
        work_or_leisure,
        description,
        title,
        budget,
        travel_required,
        entertainment,
    } = taskData;

    const history = useHistory();

    const handleChange = (event) => {
        setTaskData({
            ...taskData,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('due_date', due_date)
        formData.append('start_date', start_date)
        formData.append('completed_state', completed_state)
        formData.append('priority_state', priority_state)
        formData.append('work_or_leisure', work_or_leisure)
        formData.append('description', description)
        formData.append('title', title)
        formData.append('budget', budget)
        formData.append('travel_required', travel_required)
        formData.append('entertainment', entertainment)

        try {
            const {data} = await axiosRequest.post('/customtask/', formData);
            history.push(`/customtasks/${data.id}/`)
        } catch (error) {
            if (error.reponse?.status !== 401) {
                setErrors(error.response.data)
            }
        }
    }

    return (
        <Row className='align-items-center justify-content-center'>
            <Col className='col-12 col-md-8 col-lg-6'>
            <h1 className={`text-center ${styles.Header}`}>Create custom task</h1>
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

                <Form.Group className="mb-3" controlId="start_date">
                    <Form.Label >Planned start date</Form.Label>
                    <Form.Control
                    type='datetime-local'
                    name="start_date"
                    value={start_date}
                    onChange={handleChange}
                    />
                </Form.Group>

                {errors?.start_date?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3" controlId="travel_required">
                    <Form.Check
                    type="checkbox"
                    label="Travel required?"
                    name="travel_required"
                    value={travel_required}
                    onChange={handleChange}
                    />
                </Form.Group>

                {errors?.travel_required?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3" controlId="entertainment">
                    <Form.Check
                    type="checkbox"
                    label="Any entertainment needs?"
                    name="entertainment"
                    value={entertainment}
                    onChange={handleChange}
                    />
                </Form.Group>

                {errors?.entertainment?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3" controlId="budget">
                    <Form.Label>
                        Budget required
                    </Form.Label>
                    <Form.Control
                    type="number"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                    />
                </Form.Group>

                {errors?.budget?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3" controlId="work_or_leisure">
                    <Form.Label >Work or leisure?</Form.Label>
                    <Form.Select
                        as="select"
                        name="work_or_leisure"
                        onChange={handleChange}
                    >
                    <option value="Leisure">Leisure</option>
                    <option value="Work">Work</option>
                    </Form.Select>
                </Form.Group>

                {errors?.work_or_leisure?.map((message, idx) => (
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

                <Button
                className={`${btnStyles.ButtonStyle} `}
                type="submit"
                >
                    Create custom task
                </Button>
                <Button
                    className={`${btnStyles.ButtonStyle} `}
                >
                    Cancel
                </Button>

                {errors.non_field_errors?.map((message, idx) => 
                <Alert key={idx} className="mt-3" variant="danger">
                    {message}
                </Alert>
        )}
            </Form>
        </Col>
    </Row>
    )
}

export default CreateCustomTask