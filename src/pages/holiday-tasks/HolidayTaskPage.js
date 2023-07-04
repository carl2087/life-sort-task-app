import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosRequest } from '../../api/axiosDefaults';
import DetailedHolidayTask from './DetailedHolidayTask';
import styles from '../../App.module.css'
import { useRedirect } from '../../hooks/useRedirect';


const HolidayTaskPage = () => {

    useRedirect('loggedOut');

    const { id } = useParams();
    const [holidayTask, setHolidayTask] = useState( {results: []} );

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: holidayTask}] = await Promise.all([
                    axiosRequest.get(`/holiday/${id}/`)
                ])
                setHolidayTask({results: [holidayTask]})
            } catch (error) {
            }
        }
        handleMount();
    }, [id])

    return (
        <Row className='h-100'>
            <Col className='col-12 col-lg-6 offset-lg-3'>
                <h1 className={`${styles.TaskPageTitle} text-center`}>Holiday Task</h1>
                <DetailedHolidayTask {...holidayTask.results[0]} setHolidayTask={setHolidayTask} holidayTaskPage />
            </Col>
        </Row>
    )
}

export default HolidayTaskPage