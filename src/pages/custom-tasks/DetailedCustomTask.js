import React from 'react'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import Avatar from '../../components/Avatar';

const DetailedCustomTask = (props) => {

    const {
        id,
        owner,
        profile_image,
        profile_id,
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
        </div>
        
    )
}

export default DetailedCustomTask