import React from 'react';
import { useState } from 'react';

const ToggleView = () => {
    const [isVisible,setVisible]=useState(true)
    
    const toggleChange=()=>{
        setVisible(!isVisible)
    }
    return (
        <div>

            <button onClick={toggleChange}>{isVisible?'hide':'show'}</button>

            {isVisible && <h1>The content is visible</h1>}
            
        </div>
    );
}

export default ToggleView;
