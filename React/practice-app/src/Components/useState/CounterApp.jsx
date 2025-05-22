import React, { useState } from 'react';

const CounterApp = () => {
    const [count,setCount]=useState(0)

    const inc=(()=>{
        setCount(prev=>prev+1)
    })
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={inc}>+</button>
        </div>
    );
}

export default CounterApp;
