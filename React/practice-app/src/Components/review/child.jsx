import React from 'react';



const Child = ({sendData}) => {

    const handleData=(()=>{
        let result='The data from child'
        sendData(result)
    })
    return (
        <div>

            <h1>Child component</h1>



            <button onClick={handleData} >Send Data To Parent</button>
            
        </div>
    );
}

export default Child;
