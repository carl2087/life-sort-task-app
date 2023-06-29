import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosRequest } from '../../api/axiosDefaults';
import DetailedCustomTask from './DetailedCustomTask';
import styles from '../../App.module.css'
import { useRedirect } from '../../hooks/useRedirect';


const CustomTaskPage = () => {

    useRedirect('loggedOut');

    const { id } = useParams();
    const [customTask, setCustomTask] = useState( {results: []} );

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: customTask}] = await Promise.all([
                    axiosRequest.get(`/customtask/${id}/`)
                ])
                setCustomTask({results: [customTask]})
            } catch (error) {
            }
        }
        handleMount()
    }, [id])


    return (
        <Row className='h-100'>
            <Col className='col-6 offset-3'>
                <h1 className={`${styles.TaskPageTitle} text-center`}>Custom Task: {id}</h1>
                <DetailedCustomTask {...customTask.results[0]} setCustomTask={setCustomTask} customTaskPage />
            </Col>
        </Row>
    )
}

export default CustomTaskPage