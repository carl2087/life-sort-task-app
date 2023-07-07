import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosRequest } from '../../api/axiosDefaults';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/TaskDetail.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Button from 'react-bootstrap/Button';
import btnStyles from '../../styles/Button.module.css'
import { useRedirect } from '../../hooks/useRedirect';


const DetailedHolidayTask = (props) => {

    useRedirect('loggedOut');

    const history = useHistory();

    const {
        id,
        date_of_holiday,
        completed_state,
        title,
        description,
        budget,
        clothes,
        passport,
        holiday_insurance,
        suitcases_packed,
        holiday_paid_in_full,
        car_hire,
        tickets,
        entertainment,
        is_overdue,
    } = props;

    const handleDelete = async () => {
        try {
            await axiosRequest.delete(`/holiday/${id}/`);
            handleClose();
            window.location.reload();
        } catch (error) {
            // console.log(error)
        }
    }

    const handleEdit = () => {
        history.push(`/holidaytask/${id}/edit`)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col className={`${styles.TaskCol}`}>
            <div className='text-center'>
                <Link to={`/holiday/${id}`} className={styles.TaskTitleLink}>
                <h2 className={styles.TaskTitle}>{ title }</h2>
                </Link>
                <p>{ description }</p>
                <p>Date of holiday: { date_of_holiday }</p>
                <p>Cost of holiday: { budget }</p>
                <p>{ passport ? 'Passport is okay' : 'Need to get passport' }</p>
                <p>{ holiday_insurance ? 'Holiday insurance is okay' : 'Still need holiday insurance' }</p>
                <p>{ suitcases_packed ? 'Suitcases are packed' : 'Still need to pack suitcases' }</p>
                <p>{ car_hire ? 'Car hire is okay' : 'Car hire not required' }</p>
                <p>{ tickets ? 'Tickets are okay' : 'No ticket requirements' }</p>
                <p>{ entertainment ? 'Entertainment is required' : 'No entertainment required'}</p>
                <p>{ clothes ? 'Clothes okay' : 'No clothes required' }</p>
                <p>{ holiday_paid_in_full ? 'Holiday is all paid for' : 'Still need to finish paying for holiday' }</p>
                <p>Current status for task: { completed_state }</p>
                <p>{ is_overdue ? <span className={styles.Overdue}>Your holiday plan is overdue!</span> : <span className={styles.OnTime}>You are on schedule for your holiday!</span> }</p> 
                <Button
                className={btnStyles.ButtonStyle}
                onClick={handleEdit}
                >
                    Edit
                </Button>
                <Button
                className={btnStyles.ButtonStyle}
                onClick={handleShow}
                >
                    Delete
                </Button>
            </div>
            
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Are you sure you want to delete this task?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                No go back!
            </Button>
            <Button variant="primary" onClick={handleDelete}>
                Delete Task
            </Button>
            </Modal.Footer>
        </Modal>
        </>
        </Col>
    )
}

export default DetailedHolidayTask