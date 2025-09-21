import React, { createContext, useState } from 'react';


export const ThemeContext = createContext()


const dark={
    background:"#000",
    height:'100vh',
    color:"#fff"
}

const light={
    background:"#fff",
     height:'100vh',
    color:"#000"
}

let name='Akhildas'

const ContextTheme = ({children}) => {

    const [isDark,setDark]=useState(false);

    const toggleTheme = ()=>setDark((prev)=>!prev);

    const theme = isDark ? dark : light
    return (
        <ThemeContext.Provider value={{isDark,toggleTheme,theme,name}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ContextTheme;
