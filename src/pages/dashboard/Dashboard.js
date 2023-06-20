import React, { useEffect, useState } from 'react'
import { axiosRequest } from '../../api/axiosDefaults';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import DetailedCustomTask from '../custom-tasks/DetailedCustomTask';

const Dashboard = () => {
    const [customTasks, setCustomTasks] = useState({results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchCustomTasks = async () => {
            try {
                const {data} = await axiosRequest.get('/customtask/')
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
                    console.log('show no results')
                )}
                </>
            ) : (
                console.log('loading spinner not loading')
            )}

        </div>
    )
}

export default Dashboard