import React from 'react';
import { useState } from 'react';

const ToggleMode = () => {

    const [isDark,setDark]=useState(false)

   const handleTheme=()=>{
     setDark(prev=>!prev)
   }

   const themeStyle={
    background:isDark? '#000' :'#fff',
    color: isDark ? '#fff':'#333',
    height :'100vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    transition:'all 0.03s ease'
   }
    return (
        <div>

            <div style={themeStyle}>
                    <h1>{isDark ? 'Dark Mode':'Light Mode'}</h1>
                    <button onClick={handleTheme}>Switch To {isDark ? 'Light':'Dark'}</button>
            </div>


            
        </div>
    );
}

export default ToggleMode;
