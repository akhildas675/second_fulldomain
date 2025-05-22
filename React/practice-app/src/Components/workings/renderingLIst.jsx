import React from 'react';

const RenderingLIst = () => {
    let cars=['bmw','ford','mini','porsche911','gtr']
    return (
        <div>
            {cars.map((car)=>{return <h1>{car}</h1>})}
        </div>
    );
}

export default RenderingLIst;
