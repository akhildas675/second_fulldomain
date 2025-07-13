import React from 'react';

const StudentChild = ({sendData}) => {

    const handleSend=()=>{
        sendData('The message from child via callback')
    }
    return (
        <div>

            <h1>This is the Student Child</h1>

            <button  onClick={handleSend}>Send Parent</button>
            
        </div>
    );
}

export default StudentChild;
