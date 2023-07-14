import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { axiosRequest } from '../../api/axiosDefaults';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from '../../App.module.css'
import Asset from '../../components/Asset';
import NoResults from '../../assets/magnifying-glass.svg';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../../utils/utils';
import DetailedHolidayTask from './DetailedHolidayTask';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useRedirect } from '../../hooks/useRedirect';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Form from 'react-bootstrap/Form';


const HolidayTasks = ({ filter = '' }) => {

    useRedirect('loggedOut');

    const currentUser = useCurrentUser();
    const [holidayTasks, setHolidayTasks] = useState({results: []});
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchHolidayTasks = async () => {
            try {
                const {data} = await axiosRequest.get(`/holiday/?${filter}search=${query}`)
                data.results = data.results.filter((result) => {
                    return result.completed_state !== 'Completed'
                })
                setHolidayTasks(data)
                setHasLoaded(true)
            } catch (error) {
                // console.log(error)
            }
        }
        setHasLoaded(false)
        const timer = setTimeout(() => {
            fetchHolidayTasks();
            }, 1000)
            return () => {
                clearTimeout(timer)
            }
    }, [filter, query, pathname, currentUser]);

    return (
        <div>
            <Form className={`${styles.SearchBar} col-md-6 border border-dark rounded`}  onSubmit={(event) => event.preventDefault()}>
                <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className="col-md-6"
                placeholder="Search Holiday Tasks"
            />
            </Form>
            {hasLoaded ? (
                <>
                <Link to='/holidaytasks' className={`${styles.TaskPageLink}`}>
                <h1 className={`text-center ${styles.TaskPageTitle}`}>Holiday Tasks</h1>
                </Link>
                {holidayTasks.results.length ? (
                    <InfiniteScroll
                    dataLength={holidayTasks.results.length}
                    loader={<Asset spinner/>}
                    hasMore={!!holidayTasks.next}
                    next={() => fetchMoreData(holidayTasks, setHolidayTasks)}
                    >
                        {
                        holidayTasks.results.map(holidayTask => (
                            <DetailedHolidayTask key={holidayTask.id} {...holidayTask} />
                        ))
                    }
                    </InfiniteScroll>
                ) : (
                        <Row className={`text-center ${styles.TaskLists} align-items-center`}>
                            <Col className='col-12'>
                            <img className={styles.NoResultsImage} src={NoResults} alt='No results' />
                            <br />
                            <h2 className={`${styles.TaskPageTitle} text-center`}>No Holiday tasks found!</h2>
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
    );
}

export default HolidayTasks;