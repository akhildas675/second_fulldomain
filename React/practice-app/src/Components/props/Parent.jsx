import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [data,setData]=useState('')
    const sendData=()=>{
        setData('This data from the parent')
    }
    return (
        <div>

            <h1>Parent Component</h1>
            <button onClick={sendData}>SendData</button>        
            <Child parentData={data}/>    
        </div>
    );
}

export default Parent;
