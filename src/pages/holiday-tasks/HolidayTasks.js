import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { axiosRequest } from '../../api/axiosDefaults';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../App.module.css'
import Asset from '../../components/Asset';
import NoResults from '../../assets/magnifying-glass.svg'
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../../utils/utils';
import DetailedHolidayTask from './DetailedHolidayTask';
import { Link } from 'react-router-dom/cjs/react-router-dom';


const HolidayTasks = () => {
    const [holidayTasks, setHolidayTasks] = useState({results: []});
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchHolidayTasks = async () => {
            try {
                const {data} = await axiosRequest.get('/holiday/')
                data.results = data.results.filter((result) => {
                    return result.completed_state !== 'Completed'
                })
                setHolidayTasks(data)
                setHasLoaded(true)
            } catch (error) {
                console.log(error)
            }
        }
        setHasLoaded(false)
        fetchHolidayTasks()
    }, [pathname])

    return (
        <div>
            {hasLoaded ? (
                <>
                <Link to='/holidaytasks' className={`${styles.TaskPageLink}`}>
                <h1 className={`text-center ${styles.TaskPageTitle}`}>Holiday Tasks</h1>
                </Link>
                {holidayTasks.results.length ? (
                    <InfiniteScroll
                    children={
                        holidayTasks.results.map(holidayTask => (
                            <DetailedHolidayTask key={holidayTask.id} {...holidayTask} />
                        ))
                    }
                    dataLength={holidayTasks.results.length}
                    loader={<Asset spinner/>}
                    hasMore={!!holidayTasks.next}
                    next={() => fetchMoreData(holidayTasks, setHolidayTasks)}
                    />
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

export default HolidayTasks