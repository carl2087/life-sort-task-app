import React, { useEffect, useState } from 'react'
import {Row,  Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosRequest } from '../../api/axiosDefaults';
import DetailedCustomTask from './DetailedCustomTask';
import styles from '../../App.module.css'


const CustomTaskPage = () => {

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
                console.log(error)
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