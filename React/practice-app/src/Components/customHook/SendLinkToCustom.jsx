import React from 'react';

const SendLinkToCustom = ({sendLink}) => {

    const handleClick=()=>{
        sendLink('https://jsonplaceholder.typicode.com/users')
    }
    return (
        <div>

            <button onClick={handleClick}>Send Link</button>
            
            
        </div>
    );
}

export default SendLinkToCustom;
