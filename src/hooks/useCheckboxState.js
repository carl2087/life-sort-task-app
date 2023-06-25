import { useState } from 'react';

// Custom hook that handles the checkbox state
// Updates the the state based on chackbox name
// Uses the spread operator to to create a new object
// Toggles the value by checking it is different from the previous value
// then returns the updated state to return a boolean value to the api

const useCheckboxState = (initialState) => {

    const [checkboxState, setCheckboxState] = useState(initialState);
    
        const handleCheckboxChange = (name) => {
            setCheckboxState((prevState) => {
                const updatedState = { ...prevState };
                updatedState[name] = !prevState[name];
                return updatedState;
            });
        };
    
        return { checkboxState, handleCheckboxChange };
    };

export default useCheckboxState;