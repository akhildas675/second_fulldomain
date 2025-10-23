import React from 'react';
import UseCustomHook from './UseCustomHook';



const CustomHooks = () => {

    const {count,increment,decrement,reset}=UseCustomHook()
    return (
        <div>

            <h1>Count:{count}</h1>

            <button onClick={increment}>Inc</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Inc</button>
            
        </div>
    );
}

export default CustomHooks;
