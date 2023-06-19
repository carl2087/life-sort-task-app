import React, { useEffect, useState } from 'react'
import {Row,  Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosRequest } from '../../api/axiosDefaults';

const CustomTaskPage = () => {

    const { id } = useParams();
    const [customTask, setCustomTask] = useState( {results: []} );

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: customTask}] = await Promise.all([
                    axiosRequest.get(`/customtask/${id}`)
                ])
                setCustomTask({results: [customTask]})
                console.log(customTask)
            } catch (error) {
                console.log(error)
            }
        }
        handleMount()
    }, [id])


    return (
        <Row className='h-100'>
            <Col>
                <h1>Custom Task</h1>
            </Col>
        </Row>
    )
}

export default CustomTaskPage