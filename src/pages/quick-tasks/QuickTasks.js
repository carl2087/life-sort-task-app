import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosRequest } from '../../api/axiosDefaults';
import styles from '../../App.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import DetailedQuickTask from './DetailedQuickTask';
import Asset from '../../components/Asset';
import { fetchMoreData } from '../../utils/utils';
import { Col, Container, Row } from 'react-bootstrap';
import NoResults from '../../assets/magnifying-glass.svg'


const QuickTasks = () => {

    const [quickTasks, setQuickTasks] = useState({results: []});
    const [hasLoaded, setHasLoaded] = useState(false);
    const {pathname} = useLocation();

    useEffect(() => {
        const fetchQuickTasks = async () => {
            try {
                const {data} = await axiosRequest.get('/quicktask/')
                data.results = data.results.filter((result) => {
                    return result.completed_state !== 'Completed'
                });
                setQuickTasks(data)
                setHasLoaded(true)
            } catch (error) {
                console.log(error)
            }
        }
        setHasLoaded(false);
        fetchQuickTasks();
    }, [pathname])


    return (
        <div>
            {hasLoaded ?(
                <>
                <Link to='/quicktasks' className={`${styles.TaskPageLink}`}>
                    <h1 className={`text-center ${styles.TaskPageTitle}`}>Quick Tasks</h1>
                </Link>
                {quickTasks.results.length ? (
                    <InfiniteScroll
                    children={
                        quickTasks.results.map(quickTask => (
                            <DetailedQuickTask key={quickTask.id} {...quickTask} />
                        ))
                    }
                    dataLength={quickTasks.results.length}
                    loader={ <Asset spinner /> }
                    hasMore={ !!quickTasks.next }
                    next={ () => fetchMoreData(quickTasks, setQuickTasks) }
                    />
                ) : (
                    <Row className={`text-center ${styles.TaskLists}`} >
                        <Col className='col-lg-6 offset-3'>
                            <img className={styles.NoResultsImage} src={NoResults} alt='No results' />
                            <br />
                            <h2 className={`${styles.TaskPageTitle} text-center`}>No Quick tasks found!</h2>
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

export default QuickTasks