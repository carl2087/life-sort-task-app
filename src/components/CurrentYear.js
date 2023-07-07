import React from 'react';

const CurrentYear = () => {

    const ThisYear = new Date().getFullYear();

    return (
        <span>
            Lifesort task app created by Carl Ellis &copy; {ThisYear}
        </span>
    )
}

export default CurrentYear;