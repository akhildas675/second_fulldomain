import React, { useState } from 'react';

const Buttons = () => {

    const [x,setX]=useState(0)
    const buttonClick=(()=>{
        console.log('Button  clicked')
        setX(x+1)
        console.log(x)
    })
    return (
        <div>
            {x}
            <button onClick={()=>buttonClick()}>clicked</button>
        </div>
    );
}

export default Buttons;
