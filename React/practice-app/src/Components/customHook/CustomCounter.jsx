import React from 'react';
import UseCustomCounter from './useCustomCounter';

const CustomCounter = () => {
    const {count,increment,decrement,reset}=UseCustomCounter()
    return (
        <div>
            <h1>The CustomHook Counter App</h1>

            <h3>{count}</h3>

            <button onClick={increment}>Inc</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Dec</button>


        </div>
    );
}

export default CustomCounter;
