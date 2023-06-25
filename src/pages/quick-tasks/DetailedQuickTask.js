import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosRequest } from '../../api/axiosDefaults';
import Modal from 'react-bootstrap/Modal';
import btnStyles from '../../styles/Button.module.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import styles from '../../styles/TaskDetail.module.css'
import Col from 'react-bootstrap/Col';


const DetailedQuickTask = (props) => {

    const history = useHistory();

    const {
        id,
        due_date,
        completed_state,
        priority_state,
        title,
        description,
        is_overdue,
    } = props;

    const handleDelete = async () => {
        try {
            await axiosRequest.delete(`/quicktask/${id}/`);
            handleClose();
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = () => {
        history.push(`/quicktask/${id}/edit`)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Col className={`${styles.TaskCol}`}>
            <div className='text-center'>
                <Link to={`/quicktask/${id}`} className={styles.TaskTitleLink}>
                <h2 className={styles.TaskTitle}>{ title }</h2>
                </Link>
                <p>{ description }</p>
                <p>Priority of task: { priority_state }</p>
                <p>Expected due date for task: { due_date }</p>
                <p>Current status for task: { completed_state }</p>
                <p>{ is_overdue ?
                <span className={styles.Overdue}>Task is overdue!</span>
                : <span className={styles.OnTime}>You are on schedule for your task!</span> }</p> 
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

export default DetailedQuickTask