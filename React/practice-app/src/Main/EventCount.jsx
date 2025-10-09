import React from 'react';
import { useState } from 'react';

const EventCount = () => {
    const [count,setCount]=useState(0);
    const [content,setContent]=useState('')



const handleChange=(e)=>{
    
    setContent(e.target.value)
    setCount(prev=>prev+1)
}





    return (
        <div>

            <h1>Count:{count}</h1>
            <h1>Content:{content}</h1>

            <input type="text"  onChange={handleChange} value={content} />


            
        </div>
    );
}

export default EventCount;
