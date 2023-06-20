import React from 'react'
import styles from '../../styles/TaskDetail.module.css'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import btnStyles from '../../styles/Button.module.css'


const DetailedCustomTask = (props) => {

    const {
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


    return (
        <Col className={` ${styles.TaskCol}`}>
            <div className='text-center'>
                <h2 className={styles.TaskTitle}>{ title }</h2>
                <p>{ description }</p>
                <p>Priority of task: { priority_state }</p>
                <p>{ entertainment ? 'Entertainment is required' : 'No entertainment required'}</p>
                <p>{ travel_required ? 'Travel is required' : 'No travel required' }</p>
                <p>Work or leisure: { work_or_leisure }</p>
                <p>Budget required: £{ budget }</p>
                <p>Planned start date: { start_date }</p>
                <p>Expected due date for task: { due_date }</p>
                <p>Current status for task: { completed_state }</p>
                <p>{ is_overdue ? 'Task is overdue!' : 'You are on schedule for your task!' }</p>
                <Button
                className={btnStyles.ButtonStyle}
                onClick={() => {}}
                >
                    Edit
                </Button>
                <Button
                className={btnStyles.ButtonStyle}
                onClick={() => {}}
                >
                    Delete
                </Button>
            </div>
        </Col>
    )
}

export default DetailedCustomTask