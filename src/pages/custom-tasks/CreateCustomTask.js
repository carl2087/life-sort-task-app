import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from '../../styles/CreateTasks.module.css'




import btnStyles from "../../styles/Button.module.css";
import { Col, Row } from "react-bootstrap";

function CreateCustomTask() {

    const [errors, setErrors] = useState({});

    const [taskData, setTaskData] = useState({
        due_date: '',
        start_date: '',
        completed_state: 'In Progress',
        priority_state: 'Low',
        work_or_leisure: 'Leisure',
    })


    return (
        <Row className='align-items-center justify-content-center'>
            <Col className='col-12 col-md-8 col-lg-6'>
            <h1 className={`text-center ${styles.Header}`}>Create custom task</h1>

        <Form>
        <Form.Group className="mb-3">
            <Form.Label >Disabled input</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
            <Form.Select id="disabledSelect">
            <option>Disabled select</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
            />
        </Form.Group>
        <Button
            className={`${btnStyles.ButtonStyle} `}
            onClick={() => {}}
        >
            Cancel
        </Button>
        <Button className={`${btnStyles.ButtonStyle} `} type="submit">
            Create custom task
        </Button>

    </Form>
    </Col>
    </Row>
    );
}

export default CreateCustomTask