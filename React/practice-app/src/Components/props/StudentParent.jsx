import React from 'react';
import StudentChild from './StudentChild';
import { useState } from 'react';

const StudentParent = () => {

        const [data,setData]=useState('')

        const handleData=(msg)=>{
            setData(msg)
        }
    return (
        <div>

            <h1>This the Student parent</h1>
                <h2>Child Message:{data}</h2>
            <StudentChild sendData={handleData}/>
            
        </div>
    );
}

export default StudentParent;
