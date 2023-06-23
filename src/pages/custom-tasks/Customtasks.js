import React, { useEffect, useState } from 'react'
import { axiosRequest } from '../../api/axiosDefaults';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import DetailedCustomTask from '../custom-tasks/DetailedCustomTask';
import NoResults from '../../assets/magnifying-glass.svg'
import { Col, Container, Row } from 'react-bootstrap';
import Asset from '../../components/Asset';

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
                {customTasks.results.length ? (
                    customTasks.results.map(customTask => (
                        <DetailedCustomTask key={customTask.id} {...customTask} />
                    ))
                ) : (
                    <Container>
                        <Row>
                            <Col>
                            <Asset src={NoResults} message={message} />
                            <p>No Results found!</p>
                            </Col>
                        </Row>
                    </Container>
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