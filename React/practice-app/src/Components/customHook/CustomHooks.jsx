import React from 'react';
import useCounterHook from './UseCustomHook';

const CustomHooks = () => {

    const{count,increment,decrement,reset}=useCounterHook()
    return (
        <div>
            <h1>Custom Hook</h1>

            <h1>Count:{count}</h1>

            <button onClick={increment}>Inc</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Dec</button>


        </div>
    );
}

export default CustomHooks;
