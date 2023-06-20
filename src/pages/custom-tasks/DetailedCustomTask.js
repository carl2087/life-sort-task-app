import React from 'react'
import styles from '../../styles/TaskDetail.module.css'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import btnStyles from '../../styles/Button.module.css'
import { axiosRequest } from '../../api/axiosDefaults';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


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
            history.goBack()
        } catch (error) {
            console.log(error)
        }
    }


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
                onClick={handleDelete}
                >
                    Delete
                </Button>
            </div>
        </Col>
    )
}

export default DetailedCustomTask