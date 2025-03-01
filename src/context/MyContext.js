import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);

    return (
        <MyContext.Provider value={{ counter, increment, decrement }}>
            {children}
        </MyContext.Provider>
    );
};