import React from 'react';

import { increment,reset,decrement } from '../Slice/CounterAppSlice';
import { useDispatch, useSelector } from 'react-redux';

const CounterApp = () => {

    const count = useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()

    return (
        <div>

            <h1>Count:{count}</h1>

            <button onClick={()=>dispatch(increment())}>Inc</button>
            <button onClick={()=>dispatch(reset())}>Inc</button>
            <button onClick={()=>dispatch(decrement())}>Inc</button>
            
        </div>
    );
}

export default CounterApp;
