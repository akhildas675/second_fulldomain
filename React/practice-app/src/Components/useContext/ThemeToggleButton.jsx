import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggleButton = () => {

    const {toggleTheme,isDark}=useContext(ThemeContext)
    return (
        <div>
            <button onClick={toggleTheme}>
                SwitchTo {isDark ? 'Light':'Dark'}
            </button>
        </div>
    );
}

export default ThemeToggleButton;
