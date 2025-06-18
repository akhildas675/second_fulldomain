import React from 'react';
import Child from './child';
import { useState } from 'react';

const Parent = () => {
    const [value,setValue]=useState('')
    return (
        <div>
            <h2>Parent Component</h2>

            <p>this is from child:{value}</p>

            <Child sendData={setValue}/>
        </div>
    );
}

export default Parent;
