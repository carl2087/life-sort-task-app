import React, { useEffect, useState } from 'react'
import { axiosRequest } from '../../api/axiosDefaults';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import DetailedCustomTask from '../custom-tasks/DetailedCustomTask';
import NoResults from '../../assets/magnifying-glass.svg'
import { Col, Container, Row } from 'react-bootstrap';
import Asset from '../../components/Asset';
import styles from '../../App.module.css'

const Customtasks = ({message}) => {
    const [customTasks, setCustomTasks] = useState({results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchCustomTasks = async () => {
            try {
                const {data} = await axiosRequest.get('/customtask/')
                    data.results = data.results.filter((result) => {
                        return result.completed_state !== 'Completed'
                    });
                setCustomTasks(data)
                setHasLoaded(true)
            } catch (error) {
                console.log(error)
            }
        }
        setHasLoaded(false)
        fetchCustomTasks()
    }, [pathname])

    return (
        <div>
            {hasLoaded ? (
                <>
                <h1 className={`text-center ${styles.TaskPageTitle}`}>Custom Tasks</h1>
                {customTasks.results.length ? (
                    customTasks.results.map(customTask => (
                        <DetailedCustomTask key={customTask.id} {...customTask} />
                    ))
                ) : (
                        <Row className={`text-center ${styles.TaskLists}`}>
                            <Col className='col-lg-6 offset-3 '>
                            <img className={styles.NoResultsImage} src={NoResults} alt='No results' />
                            <br />
                            <h2 className={`${styles.TaskPageTitle} text-center`}>No Custom tasks found!</h2>
                            </Col>
                        </Row>
                )}
                </>
            ) : (
                <Container>
                    <Asset spinner />
                </Container>
            )}
        </div>
    )
}

export default Customtasks