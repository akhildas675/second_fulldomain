import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment } from '../Slice/EventSlice';


const EventChangeCount = () => {
    const count=useSelector((state)=>state.eventReducers.value)
    const dispatch = useDispatch()
    const [content,setContent]=useState('');


    const handleChange =(e)=>{
        setContent(e.target.value)
        dispatch(increment())
    }
    return (
        <div>
            <input type="text" onChange={handleChange} value={content} />

            <h1>Content:{content}</h1>
            <h1>{count}</h1>
        </div>
    );
}

export default EventChangeCount;
