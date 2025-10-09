import React from 'react';
import { useRef } from 'react';

const UseRefDark = () => {
    const darkRef=useRef(null);
    const isDark=useRef(false);

    const handleChange=()=>{
        if(darkRef.current){
            isDark.current=!isDark.current;
            if(isDark.current){
                darkRef.current.style.background='#fff'
            }else{
                darkRef.current.style.background='#000'
            }
        }
    }
    return (
        <div ref={darkRef} style={{background:'#fff',height:'100vh'}}>
            <button onClick={handleChange}>Click</button>
        </div>
    );
}

export default UseRefDark;
