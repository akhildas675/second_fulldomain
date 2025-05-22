import React from 'react';

const ConditionalRendering = () => {
    let punch='off'
    return (

        <div>
            {punch=='on'?<h1>Duty on</h1>:<h1>Duty off</h1>}
            
        </div>
    );
}

export default ConditionalRendering;
