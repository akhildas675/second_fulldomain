import React, { useState } from 'react';

const CounterApp = () => {
    const [count,setCount]=useState(0)

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
            <h1>Counter App</h1>

            <h3>Count:{count}</h3>

            <button onClick={()=>increment()}>+</button>
            <button onClick={()=>reset()}>Reset</button>
            <button onClick={()=>decrement()}>-</button>
        </div>
    );
}

export default CounterApp;
