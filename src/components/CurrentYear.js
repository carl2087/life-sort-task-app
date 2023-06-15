import React from 'react'

const CurrentYear = () => {

    const ThisYear = new Date().getFullYear();

    return (
        <span>
            Lifesort task app created by Carl Ellis copyright {ThisYear}
        </span>
    )
}

export default CurrentYear