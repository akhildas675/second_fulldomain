import React from 'react';
import Child from './Child';
import { useState } from 'react';

const Parent = () => {

    const [child,setChild]=useState('')
    const handleFromChildData=(data)=>{
        setChild(data)
    }
    return (
        <div>
            <h3>This is the parent Component</h3>
            <p>Child:{child}</p>
            <Child sendData={handleFromChildData}/>
        </div>
    );
}

export default Parent;
