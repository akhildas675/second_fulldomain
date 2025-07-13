import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';

const ViewToggle = () => {
    const{theme}=useContext(ThemeContext)
    return (
        <div style={{...theme,height:'100vh'}} >
            <h1>The Theme Change</h1>
            <ThemeToggleButton/>
        </div>
    );
}

export default ViewToggle;
