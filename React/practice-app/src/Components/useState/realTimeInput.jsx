import React, { useState } from 'react';

const RealTimeInput = () => {

    const [text,setText]=useState('')

    const handleChange=((e)=>{
        setText(e.target.value)
    })
    return (
        <div>

            <h1>type on the input box</h1>

           <h1>{text}</h1>
            <input type="text"  onChange={handleChange} />
        </div>
    );
}

export default RealTimeInput;
