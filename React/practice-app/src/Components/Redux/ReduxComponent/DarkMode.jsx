import React from 'react';
import { toggle } from '../Slice/DarkModeSlice';
import { useDispatch, useSelector } from 'react-redux';

const DarkMode = () => {

    const theme=useSelector((state)=>state.changeMode.mode);
    const dispatch=useDispatch();
    return (
        <div style={{background:theme=="light"?"#fff":"#000",height:'100vh'}}>

           <button onClick={()=>dispatch(toggle())}>Click</button>
            
        </div>
    );
}

export default DarkMode;
