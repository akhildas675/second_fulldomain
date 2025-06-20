import React, { useState } from 'react';

const UseCounterLimit = (initial=0,min=0,max=10) => {

    const [count,setCount]=useState(initial)

    const increment=()=>{
        if(count<max){
            setCount(prev=>prev+1)
        }else{
            alert('The Maximum increment is Exceed.......')
        }
    }

    const decrement=()=>{
        if(count>min){
            setCount(prev=>prev-1)
        }else{
            alert('The maximum decrement is Exceed.....')
        }
    }

    const reset=()=>{
        setCount(initial)
    }
      

        return {count,increment,decrement,reset}
}

export default UseCounterLimit;
