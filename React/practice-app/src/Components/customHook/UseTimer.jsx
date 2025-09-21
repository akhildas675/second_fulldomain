import React, { useRef, useState } from 'react';

const UseTimer = () => {
   const[count,setCount]=useState(0);
   const [isRun,setRun]=useState(false);
   const timeRef=useRef(null)


   const start = ()=>{
     if(!isRun){
        setRun(true)

        timeRef.current=setInterval(()=>{
            setCount(prev=>prev+1)
        },1000)
     }
   }

   const stop = ()=>{
    if(isRun){
        setRun(false);

        clearInterval(timeRef.current)
    }
   }

   const reset =()=>{
       clearInterval(timeRef.current);
       setCount(0)
       setRun(false)
   }

   return {count,stop,start,reset}



}

export default UseTimer;
