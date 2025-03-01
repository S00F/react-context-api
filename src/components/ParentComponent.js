import React from 'react';
import { MyProvider } from '../context/MyContext';
import { ThemeProvider } from '../context/ThemeContext';
import ChildComponent from './ChildComponent';
import GreatChildComponent from './GreatChildComponent';

const ParentComponent = () => {
    return (
        <MyProvider>
            <ThemeProvider>
                <div>
                    <h1>Parent Component</h1>
                    <ChildComponent />
                    <GreatChildComponent />
                </div>
            </ThemeProvider>
        </MyProvider>
    );
};

export default ParentComponent;