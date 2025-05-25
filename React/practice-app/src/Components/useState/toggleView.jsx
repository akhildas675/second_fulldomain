import React, { useState } from 'react';

const ToggleView = () => {
    const [isVisible,setVisible]=useState(true)

    const toggleChange=(()=>{
        setVisible(!isVisible)
    })
    return (
        <div>

            <button onClick={toggleChange}>{!isVisible ? 'show' :'hide' }</button>

            {
                (isVisible &&(
                    <p>Hello Akhildas </p>
                ))
            }
            
        </div>
    );
}

export default ToggleView;
