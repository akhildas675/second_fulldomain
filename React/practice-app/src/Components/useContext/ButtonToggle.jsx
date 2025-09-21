import React, { useContext } from 'react';
import { ThemeContext } from './ContextTheme';

const ButtonToggle = () => {

    const {isDark,toggleTheme,name}=useContext(ThemeContext);
    console.log(name)
    return (
        <div>
            <button onClick={toggleTheme}>SwitchTo {isDark ? "Light" :"Dark"}</button>
            
        </div>
    );
}

export default ButtonToggle;

