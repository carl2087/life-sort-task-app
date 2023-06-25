import React, { useState } from 'react'
import useCheckboxState from '../../hooks/useCheckboxState';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { axiosRequest } from '../../api/axiosDefaults';
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import styles from '../../styles/CreateTasks.module.css'
import btnStyles from "../../styles/Button.module.css";


const CreateHolidayTask = () => {

    const [errors, setErrors] = useState({});

    const {
        checkboxState,
        handleCheckboxChange,
    } = useCheckboxState({
        clothes: false,
        passport: false,
        holiday_insurance: false,
        suitcases_packed: false,
        holiday_paid_in_full: false,
        car_hire: false,
        tickets: false,
        entertainment: false,
    })

    const [holidayData, setHolidayData] = useState({
        title: '',
        date_of_holiday: '',
        completed_state: 'In progress',
        description: '',
        budget: 0,
        clothes: false,
        passport: false,
        holiday_insurance: false,
        suitcases_packed: false,
        holiday_paid_in_full: false,
        car_hire: false,
        tickets: false,
        entertainment: false,
    })

    const {
        title,
        date_of_holiday,
        completed_state,
        description,
        budget,
    } = holidayData;

    const history = useHistory();

    const handleChange = (event) => {
        setHolidayData({
            ...holidayData,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('date_of_holiday', date_of_holiday);
        formData.append('title', title);
        formData.append('completed_state', completed_state);
        formData.append('description', description);
        formData.append('budget', budget)
        formData.append('clothes', checkboxState.clothes);
        formData.append('passport', checkboxState.passport);
        formData.append('holiday_insurance', checkboxState.holiday_insurance);
        formData.append('suitcases_packed', checkboxState.suitcases_packed);
        formData.append('holiday_paid_in_full', checkboxState.holiday_paid_in_full);
        formData.append('car_hire', checkboxState.car_hire);
        formData.append('tickets', checkboxState.tickets);
        formData.append('entertainment', checkboxState.entertainment);

        try {
            await axiosRequest.post('/holiday/', formData);
            history.push('/dashboard')
        } catch (error) {
            if (error.reponse?.status !== 401) {
                setErrors(error.response.data)
            }
        }
    }



    return (
        <Row className='align-items-center justify-content-center'>
            <Col className='col-12 col-md-8 col-lg-6'>
            <h1 className={`text-center ${styles.Header}`}>Create Holiday task</h1>
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
                    <Form.Label >Description of holiday</Form.Label>
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


                <Form.Group className="mb-3" controlId="date_of_holiday">
                    <Form.Label >Holiday date</Form.Label>
                    <Form.Control
                    type='datetime-local'
                    name="date_of_holiday"
                    value={date_of_holiday}
                    onChange={handleChange}
                    />
                </Form.Group>

                {errors?.date_of_holiday?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}


                <Form.Group className="mb-3 form-check-inline" controlId="entertainment">
                    <Form.Check
                    type="checkbox"
                    checked={checkboxState.entertainment}
                    label="Any entertainment needs?"
                    name="entertainment"
                    onChange={() => handleCheckboxChange('entertainment')}
                    />
                </Form.Group>

                {errors?.entertainment?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3 form-check-inline" controlId="tickets">
                    <Form.Check
                    type="checkbox"
                    checked={checkboxState.tickets}
                    label="Any ticket requirements?"
                    name="tickets"
                    onChange={() => handleCheckboxChange('tickets')}
                    />
                </Form.Group>

                {errors?.tickets?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3 form-check-inline" controlId="car_hire">
                    <Form.Check
                    type="checkbox"
                    checked={checkboxState.car_hire}
                    label="Any car hire requirements?"
                    name="car_hire"
                    onChange={() => handleCheckboxChange('car_hire')}
                    />
                </Form.Group>

                {errors?.car_hire?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3 form-check-inline" controlId="holiday_paid_in_full">
                    <Form.Check
                    type="checkbox"
                    checked={checkboxState.holiday_paid_in_full}
                    label="Holiday fully paid for?"
                    name="holiday_paid_in_full"
                    onChange={() => handleCheckboxChange('holiday_paid_in_full')}
                    />
                </Form.Group>

                {errors?.holiday_paid_in_full?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3 form-check-inline" controlId="suitcases_packed">
                    <Form.Check
                    type="checkbox"
                    checked={checkboxState.suitcases_packed}
                    label="Suitcases fully packed?"
                    name="suitcases_packed"
                    onChange={() => handleCheckboxChange('suitcases_packed')}
                    />
                </Form.Group>

                {errors?.suitcases_packed?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3 form-check-inline" controlId="holiday_insurance">
                    <Form.Check
                    type="checkbox"
                    checked={checkboxState.holiday_insurance}
                    label="Holiday insurance okay?"
                    name="holiday_insurance"
                    onChange={() => handleCheckboxChange('holiday_insurance')}
                    />
                </Form.Group>

                {errors?.holiday_insurance?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3 form-check-inline" controlId="passport">
                    <Form.Check
                    type="checkbox"
                    checked={checkboxState.passport}
                    label="Passport okay?"
                    name="passport"
                    onChange={() => handleCheckboxChange('passport')}
                    />
                </Form.Group>

                {errors?.passport?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3 form-check-inline" controlId="clothes">
                    <Form.Check
                    type="checkbox"
                    checked={checkboxState.clothes}
                    label="Clothes required?"
                    name="clothes"
                    onChange={() => handleCheckboxChange('clothes')}
                    />
                </Form.Group>

                {errors?.clothes?.map((message, idx) => (
                <Alert variant="danger" key={idx}>
                    {message}
                    </Alert>
                ))}

                <Form.Group className="mb-3" controlId="budget">
                    <Form.Label>
                        Holiday cost
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
                <Button
                className={`${btnStyles.ButtonStyle}`}
                type="submit"
                >
                    Create holiday task
                </Button>
                <Button
                    className={`${btnStyles.ButtonStyle} `}
                    onClick={() => history.goBack()}
                >
                    Cancel
                </Button>
                </Col>
                </Row>

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

export default CreateHolidayTask