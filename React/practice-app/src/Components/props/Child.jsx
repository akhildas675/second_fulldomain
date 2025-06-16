import React from 'react';

const Child = ({sendData}) => {
    const handleChildData=()=>{
        sendData('The data from child')
    }
    return (
        <div>
            <h3>Child Component</h3>

            <button onClick={handleChildData}>Send To Parent</button>
        </div>
    );
}

export default Child;
