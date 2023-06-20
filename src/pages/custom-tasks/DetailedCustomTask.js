import React from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext'

const DetailedCustomTask = (props) => {

    const {
        owner,
        budget,
        completed_state,
        description,
        due_date,
        entertainment,
        is_overdue,
        priority_state,
        start_date,
        title,
        travel_required,
        work_or_leisure,
    } = props;

    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner

    return (
        <div>
            <h1>{ title }</h1>
            <p>{ description }</p>
            <p>{ budget }</p>
            <p>{ completed_state }</p>
            <p>{ due_date }</p>
            <p>{ entertainment }</p>
            <p>{ is_overdue }</p>
            <p>{ priority_state }</p>
            <p>{ work_or_leisure }</p>
            <p>{ start_date }</p>
            <p>{ travel_required }</p>
        </div>
        
    )
}

export default DetailedCustomTask