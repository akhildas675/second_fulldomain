import React, { useEffect, useState } from 'react';

const WindowResize = () => {
    const [width,setWidth]=useState(window.innerWidth)

    useEffect(()=>{
        const handleWidth=()=>{
            setWidth(window.innerWidth)
            // console.log('rendered')
        }

        window.addEventListener('resize',handleWidth)

        return ()=> window.addEventListener('resize',handleWidth)


    },[])
    return (
        <div>
            <h1>{width}</h1>
        </div>
    );
}

export default WindowResize;
