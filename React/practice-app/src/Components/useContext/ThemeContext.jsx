import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';


export const ThemeContext=createContext()


let lightTheme={
    background:'#fff',
    color:'#000'
}
let darkTheme={
    background:'#000',
    color:'#fff'
}


const ThemeProvider = ({children}) => {

    const [isDark,setDark]=useState(false)

    const toggleTheme=()=>setDark((prev)=>!prev)

    const theme= isDark ? darkTheme :lightTheme
    return (
        <div>

            <ThemeContext.Provider value={{theme,toggleTheme,isDark}}>
                {children}
            </ThemeContext.Provider>
            
        </div>
    );
}

export default ThemeProvider;
