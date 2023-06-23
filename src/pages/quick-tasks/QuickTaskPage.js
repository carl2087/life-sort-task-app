import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { axiosRequest } from '../../api/axiosDefaults';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../App.module.css'


const QuickTaskPage = () => {

    const {id} = useParams();
    const [quickTask, setQuickTask] = useState({results: []});

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{data: quickTask}] = await Promise.all([
                    axiosRequest.get(`/quicktask/${id}`)
                ])
                setQuickTask({results: [quickTask]})
            } catch (error) {
                console.log(error)
            }
        }
        handleMount();
    }, [id])

    return (
        <Row className='h-100'>
            <Col className='col-6 offset-3'>
                <h1 className={`${styles.TaskPageTitle} text-center`}>Quick Task: {id}</h1>
            </Col>
        </Row>
    )
}

export default QuickTaskPage