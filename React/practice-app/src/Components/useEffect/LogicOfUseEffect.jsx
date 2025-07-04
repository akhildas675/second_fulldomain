import React, { useEffect, useState } from 'react';

const LogicOfUseEffect = () => {

    const [count1,setCountOne]=useState(0)
    const [count2,setCountTwo]=useState(0)


    useEffect(()=>{
        console.log('Rendered')
    },[count1])
    return (
        <div>
            <h1>Counter1:{count1}</h1>
            <button onClick={()=>setCountOne(prev=>prev+1)}>Increment</button>


            <br />


            <h1>Counter2:{count2}</h1>
            <button onClick={()=>setCountTwo(prev=>prev+1)}>Increment</button>
        </div>
    );
}

export default LogicOfUseEffect;
