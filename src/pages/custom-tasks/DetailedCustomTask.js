import React from 'react'
import styles from '../../styles/TaskDetail.module.css'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import btnStyles from '../../styles/Button.module.css'
import { axiosRequest } from '../../api/axiosDefaults';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


const DetailedCustomTask = (props) => {

    const history = useHistory();

    const {
        id,
        budget,
        completed_state,
        description,
        due_date,
        entertainment,
        is_overdue,
        priority_state,
        start_date,
        title,
        travel_required,
        work_or_leisure,
    } = props;

    const handleDelete = async () => {
        try {
            await axiosRequest.delete(`/customtask/${id}/`);
            handleClose();
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = () => {
        history.push(`/customtask/${id}/edit`)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col className={`${styles.TaskCol}`}>
            <div className='text-center'>
                <Link to={`/customtask/${id}`} className={styles.TaskTitleLink}>
                <h2 className={styles.TaskTitle}>{ title }</h2>
                </Link>
                <p>{ description }</p>
                <p>Priority of task: { priority_state }</p>
                <p>{ entertainment ? 'Entertainment is required' : 'No entertainment required'}</p>
                <p>{ travel_required ? 'Travel is required' : 'No travel required' }</p>
                <p>Work or leisure: { work_or_leisure }</p>
                <p>Budget required: £{ budget }</p>
                <p>Planned start date: { start_date }</p>
                <p>Expected due date for task: { due_date }</p>
                <p>Current status for task: { completed_state }</p>
                <p>{ is_overdue ? <span className={styles.Overdue}>Task is overdue!</span> : <span className={styles.OnTime}>You are on schedule for your task!</span> }</p> 
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

export default DetailedCustomTask