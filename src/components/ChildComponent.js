import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const ChildComponent = () => {
    const { counter, increment, decrement } = useContext(MyContext);

    return (
        <div>
            <h1>Child Component</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default ChildComponent;