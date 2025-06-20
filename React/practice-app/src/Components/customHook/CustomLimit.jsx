import React from 'react';
import UseCounterLimit from './useCounterLimit';

const CustomLimit = () => {
    const {count,increment,decrement,reset}=UseCounterLimit(0,0,10)
    return (
        <div>
            <h1>The custom counter App</h1>

            <h3>Count {count}</h3>

            <button onClick={increment}>Inc</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>dec</button>
            
        </div>
    );
}

export default CustomLimit;
