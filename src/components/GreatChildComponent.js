import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const GreatChildComponent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const backgroundColor = theme === 'light' ? '#ffffff' : '#808080';

    return (
        <div style={{ backgroundColor, padding: '20px', borderRadius: '8px' }}>
            <h2>Current Theme: {theme}</h2>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    );
};

export default GreatChildComponent;