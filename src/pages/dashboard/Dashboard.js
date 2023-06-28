import React from 'react'
import Customtasks from '../custom-tasks/Customtasks';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QuickTasks from '../quick-tasks/QuickTasks';
import HolidayTasks from '../holiday-tasks/HolidayTasks';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import btnStyles from '../../styles/Button.module.css'
import styles from '../../styles/Dashboard.module.css'
import titleStyle from '../../App.module.css'
import { useRedirect } from '../../hooks/useRedirect';

const Dashboard = () => {

    useRedirect('loggedOut');

    return (
            <Row>
                <Col className='d-none d-md-block col-md-12 col-lg-4'>
                    <Customtasks />
                </Col>
                <Col className='d-none d-md-block col-md-12 col-lg-4'>
                    <QuickTasks />
                </Col>
                <Col className='d-none d-md-block col-md-12 col-lg-4'>
                    <HolidayTasks />
                </Col>
                <h1 className={`d-md-none col-12 text-center ${titleStyle.TaskPageTitle}`}>Click on a button to view your tasks</h1>
                <Col className={`d-md-none col-12 text-center ${styles.SmallScreenStyles}`}>
                    <Link to={'/customtasks'}>
                        <Button className={btnStyles.ButtonStyle}>
                            Custom Tasks
                        </Button>
                    </Link>
                </Col>
                <Col className={`d-md-none col-12 text-center ${styles.SmallScreenStyles}`}>
                    <Link to={'/quicktasks'}>
                        <Button className={btnStyles.ButtonStyle}>
                            Quick Tasks
                        </Button>
                    </Link>
                </Col>
                <Col className={`d-md-none col-12 text-center ${styles.SmallScreenStyles}`}>
                    <Link to={'/holidaytasks'}>
                        <Button className={btnStyles.ButtonStyle}>
                            Holiday Tasks
                        </Button>
                    </Link>
                </Col>
            </Row>
    )
}

export default Dashboard