import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement,reset } from '../Slice/CounterAppSlice';
const CounterApp = () => {
    const dispatch =useDispatch()
    const count=useSelector(state=>state.CounterApp.count)
    return (
        <div>

            <h1>Count:{count}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Increment</button>
            <button onClick={()=>dispatch(reset())}>Increment</button>
            
        </div>
    );
}

export default CounterApp;
 