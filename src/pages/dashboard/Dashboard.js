import React from 'react'
import Customtasks from '../custom-tasks/Customtasks';
import { Col, Row } from 'react-bootstrap';
import QuickTasks from '../quick-tasks/QuickTasks';

const Dashboard = () => {


    return (
            <Row>
                <Col className='md-4'>
                    <Customtasks />
                </Col>
                <Col className='md-4'>
                    <QuickTasks />
                </Col>
                <Col className='md-4'>
                    <h2>Holiday tasks heres</h2>
                </Col>
            </Row>
    )
}

export default Dashboard