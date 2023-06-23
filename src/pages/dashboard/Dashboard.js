import React from 'react'
import Customtasks from '../custom-tasks/Customtasks';
import { Col, Row } from 'react-bootstrap';

const Dashboard = () => {


    return (
            <Row>
                <Col className='md-4'>
                    <Customtasks />
                </Col>
                <Col className='md-4'>
                    <h2>Quick Tasks here</h2>
                </Col>
                <Col className='md-4'>
                    <h2>Holiday tasks heres</h2>
                </Col>
            </Row>
    )
}

export default Dashboard