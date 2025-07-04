import React, { useState } from 'react';


const ChildComponent=React.memo(({name})=>{
    console.log('Rendered')
    return(
        <div>
            <h1>The User is:{name}</h1>
        </div>
    )
})

const ReactMemo = () => {

    const [count,setCount]=useState(0);
    let user='SpiderMan';

    console.log('Parent Component Rendered')

    return (
        <div>

            <ChildComponent name={user}/> 

            <h1>Counter App</h1>

            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
            
        </div>
    );
}

export default ReactMemo;
