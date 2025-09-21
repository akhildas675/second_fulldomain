import React from 'react';
import UseTimer from './UseTimer';

const CustomTimer = () => {
    
    const {count,start,stop,reset}=UseTimer()
    return (
        <div>

            <h1>{count}</h1>

            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={stop}>Stop</button>
            
        </div>
    );
}

export default CustomTimer;

