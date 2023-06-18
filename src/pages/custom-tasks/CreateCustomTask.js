import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from '../../styles/CreateTasks.module.css'




import btnStyles from "../../styles/Button.module.css";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CreateCustomTask() {

    const [errors, setErrors] = useState({});

    const [taskData, setTaskData] = useState({
        due_date: '',
        start_date: '',
        completed_state: 'In Progress',
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


    return (
        <Row className='align-items-center justify-content-center'>
            <Col className='col-12 col-md-8 col-lg-6'>
            <h1 className={`text-center ${styles.Header}`}>Create custom task</h1>
            <Form>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label >Title</Form.Label>
                    <Form.Control
                    placeholder="Title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={() => {}}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label >Description of task</Form.Label>
                    <Form.Control
                    placeholder="Description"
                    as='textarea'
                    rows={6}
                    name="description"
                    value={description}
                    onChange={() => {}}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="due_date">
                    <Form.Label >Due date</Form.Label>
                    <Form.Control
                    type='datetime-local'
                    name="due_date"
                    value={due_date}
                    onChange={() => {}}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="start_date">
                    <Form.Label >Planned start date</Form.Label>
                    <Form.Control
                    type='datetime-local'
                    name="start_date"
                    value={start_date}
                    onChange={() => {}}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="travel_required">
                    <Form.Check
                    type="checkbox"
                    label="Travel required?"
                    name="travel_required"
                    value={travel_required}
                    onChange={() => {}}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="entertainment">
                    <Form.Check
                    type="checkbox"
                    label="Any entertainment needs?"
                    name="entertainment"
                    value={entertainment}
                    onChange={() => {}}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="budget">
                    <Form.Label>
                        Budget required
                    </Form.Label>
                    <Form.Control
                    type="number"
                    name="budget"
                    value={budget}
                    onChange={() => {}}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="work_or_leisure">
                    <Form.Label >Work or leisure?</Form.Label>
                    <Form.Select
                        as="select"
                        name="work_or_leisure"
                        onChange={() => {}}
                    >
                    <option value="Leisure">Leisure</option>
                    <option value="Work">Work</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="priority_state">
                    <Form.Label >Priority</Form.Label>
                    <Form.Select
                        as="select"
                        name="priority_state"
                        onChange={() => {}}
                    >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="completed_state">
                    <Form.Label >Task Completed?</Form.Label>
                    <Form.Select
                        as="select"
                        name="completed_state"
                        onChange={() => {}}
                    >
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Overdue">Overdue</option>
                    </Form.Select>
                </Form.Group>
                <Button
                    className={`${btnStyles.ButtonStyle} `}
                    onClick={() => {}}
                >
                    Cancel
                </Button>
                <Button
                className={`${btnStyles.ButtonStyle} `}
                type="submit"
                >
                    Create custom task
                </Button>
            </Form>
        </Col>
    </Row>
    );
}

export default CreateCustomTask