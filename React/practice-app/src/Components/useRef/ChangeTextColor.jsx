import React, { useRef } from 'react';

const ChangeTextColor = () => {
    const colorRef=useRef()
    const handleColor=()=>{
        
        colorRef.current.style.color='red';
       
    }
    return (
        <div>

                <div>
                    <h1 ref={colorRef} style={{color:'skyblue'}}>Change the color</h1>
                        <button onClick={handleColor}>Click</button>
                </div>
            
        </div>
    );
}

export default ChangeTextColor;
