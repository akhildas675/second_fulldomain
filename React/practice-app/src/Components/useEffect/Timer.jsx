import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Timer = () => {
    const [timer,setTimer]=useState(0);
    useEffect(()=>{
        let interval=setInterval(()=>{
            setTimer(prevTime=>{
                if(prevTime>=10){
                     clearInterval(interval)
                    return prevTime
                }
                return prevTime+1
            })
        },1000)

        return ()=>{
            clearInterval(interval)
        }


    },[])
    return (
        <div>

            <h1>Timer:{timer} seconds</h1>
            
        </div>
    );
}

export default Timer;
