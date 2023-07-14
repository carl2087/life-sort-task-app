import React, { useEffect, useState } from 'react';
import { axiosRequest } from '../../api/axiosDefaults';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import DetailedCustomTask from '../custom-tasks/DetailedCustomTask';
import NoResults from '../../assets/magnifying-glass.svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Asset from '../../components/Asset';
import styles from '../../App.module.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreData } from '../../utils/utils';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useRedirect } from '../../hooks/useRedirect';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import Form from 'react-bootstrap/Form';


const Customtasks = ({ filter = '' }) => {

    useRedirect('loggedOut');

    const currentUser = useCurrentUser();
    const [customTasks, setCustomTasks] = useState({results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchCustomTasks = async () => {
            try {
                const {data} = await axiosRequest.get(`/customtask/?${filter}search=${query}`)
                    data.results = data.results.filter((result) => {
                        return result.completed_state !== 'Completed'
                    });
                setCustomTasks(data)
                setHasLoaded(true)
            } catch (error) {
                // console.log(error)
            }
        }
        setHasLoaded(false)
        const timer = setTimeout(() => {
            fetchCustomTasks();
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
                placeholder="Search Custom Tasks"
            />
            </Form>
            {hasLoaded ? (
                <>
                <Link to='/customtasks' className={`${styles.TaskPageLink}`}>
                <h1 className={`text-center ${styles.TaskPageTitle}`}>Custom Tasks</h1>
                </Link>
                {customTasks.results.length ? (
                    <InfiniteScroll
                    dataLength={customTasks.results.length}
                    loader={<Asset spinner/>}
                    hasMore={!!customTasks.next}
                    next={() => fetchMoreData(customTasks, setCustomTasks)}
                    >
                        {
                        customTasks.results.map(customTask => (
                            <DetailedCustomTask key={customTask.id} {...customTask} />
                        ))
                        }
                    </InfiniteScroll>
                ) : (
                        <Row className={`text-center ${styles.TaskLists} align-items-center`}>
                            <Col className='col-12'>
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
    );
}

export default Customtasks;