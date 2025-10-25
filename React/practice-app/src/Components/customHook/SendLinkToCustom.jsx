import React from 'react';

const SendLinkToCustom = ({sendUrl}) => {

    const handleLink=()=>{
        sendUrl('https://jsonplaceholder.typicode.com/users')
    }
    return (
        <div>
            <button onClick={handleLink}>Send</button>
        </div>
    );
}

export default SendLinkToCustom;
