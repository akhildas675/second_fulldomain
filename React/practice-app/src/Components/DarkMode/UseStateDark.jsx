import React from 'react';
import { useState } from 'react';

const UseStateDark = () => {
    const [isDark,setDark]=useState(false);

    let dark = {
        background:'#000',
        height:'100vh'
    };

    let light ={
        background:'#fff',
        height:'100vh'
    };


    return (
        <div style={isDark ? dark : light}>
            <button onClick={()=>setDark(prev=>!prev)}>Click</button>
        </div>
    );
}

export default UseStateDark;
