import React from 'react';

function MessageComponent(Wrap){
    return function Wrapper(){
        return(
            <div>
                <h1>This Hoc </h1>
                <Wrap/>
            </div>
        )
    }
}

export default MessageComponent;
