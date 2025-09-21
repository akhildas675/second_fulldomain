import React, { useContext } from 'react';
import { ThemeContext } from './ContextTheme';


const DisplayTheme = () => {

    const {theme,name}=useContext(ThemeContext);
    console.log(name)
    return (
        <div style={theme}>
           
        </div>
    );
}

export default DisplayTheme;
