import React, { useState, useCallback } from 'react';
import Counter from './Counter';

const Dashboard = () => {
    const [data, setCounter] = useState(0);
    const [count, setCount] = useState(0);

    // Memoize the function that updates the data state
    const incrementData = useCallback(() => {
        setCounter(prev => prev + 1);
    }, []);

    // Memoize the function that updates the count state
    const incrementCount = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);
console.log("generate")
    return (
        <div className='text-center my-5'>
            <p>Parent count: {data} </p>
            <button onClick={incrementData}>Parent Counter</button>
            <Counter count={count} />
            <button onClick={incrementCount}>Child Counter</button>
        </div>
    );
}

export default Dashboard;
