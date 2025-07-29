import React from 'react';
import { useState } from 'react';

const RealTimeInput = () => {
    const [change,setChange]=useState('')

 const handleChange=((e)=>{
    setChange(e.target.value)
 })
    return (
        <div>
            <h1>{change}</h1>
            <input type="text" value={change} onChange={handleChange} />
        </div>
    );
}

export default RealTimeInput;
