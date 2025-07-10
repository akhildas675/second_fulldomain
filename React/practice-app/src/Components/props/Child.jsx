import React from 'react';
import Parent from './Parent';

const Child = ({parentData}) => {
    return (
        <div>
            <h2>The is Child Component</h2>
            <h3>Parent Data :{parentData}</h3>
        </div>
    );
}

export default Child;
