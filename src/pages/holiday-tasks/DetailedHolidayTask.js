import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const DetailedHolidayTask = () => {

    const history = useHistory();

    const {
        id,
        date_of_holiday,
        completed_state,
        title,
        
    }

    return (
        <div>DetailedHolidayTask</div>
    )
}

export default DetailedHolidayTask