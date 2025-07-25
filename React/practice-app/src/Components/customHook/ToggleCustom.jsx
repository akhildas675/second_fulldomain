import React from 'react';
import UseToggleCustom from './useToggleCustom';

const ToggleCustom = () => {
    const {isVisible,handleDisplay}=UseToggleCustom()
    return (

        <div>
            <button onClick={handleDisplay}>{isVisible?'close':'show'}</button>
            {isVisible ? 
        <p>Hello paragraph</p>
        : <p>Sorry</p>    
        }
        </div>
    );
}

export default ToggleCustom;
