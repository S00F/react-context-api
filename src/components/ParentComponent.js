import React from 'react';
import { MyProvider } from '../context/MyContext';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    return (
        <MyProvider>
            <div>
                <h1>Parent Component</h1>
                <ChildComponent />
            </div>
        </MyProvider>
    );
};

export default ParentComponent;