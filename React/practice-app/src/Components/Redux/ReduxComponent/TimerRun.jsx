import React, { useEffect } from 'react';

import { start,stop,reset,tick } from '../Slice/TimerSlice';
import { useDispatch, useSelector } from 'react-redux';

const TimerRun = () => {
    const {count,running}=useSelector((state)=>state.timer);
    const dispatch=useDispatch()

    useEffect(()=>{
        let timeInterval;
        if(running){
            timeInterval=setInterval(()=>{
                dispatch(tick())
            },1000)
        }
        return ()=> clearInterval(timeInterval)
    },[running,dispatch])
    return (
        <div>

            <h1>Count:{count}</h1>

            <button onClick={()=>dispatch(start())}>Start</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
            <button onClick={()=>dispatch(stop())}>Stop</button>
            
        </div>
    );
}

export default TimerRun;
