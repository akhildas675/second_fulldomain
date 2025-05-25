import React, { useState } from 'react';

const CounterApp = () => {
    let [count,setCount]=useState(0);

    const increment=(()=>{
        setCount(prev=>prev+1)
    })

    const decrement=(()=>{
        setCount(prev=>prev-1)

    })

    const reset=(()=>{
        setCount(0)
    })
    return (
        <div>
            <h1>Count:{count}</h1>

            <button onClick={increment}>Inc</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Dec</button>
            
        </div>
    );
}

export default CounterApp;
