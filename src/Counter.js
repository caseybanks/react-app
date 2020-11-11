import { useState } from 'react';

// useState is a react hook, anytime we want to use state in a component. Everytime the useState is updated, the browser is re-rendered automatically.

export function Counter() {

    // const [ state, setState ] = useState(defaultState)
    const [ count, setCount ] = useState(0);

    return (
        <div>
            <h3>{count}</h3>
            <button 
                onClick={() => setCount(count - 1)}
            >-</button>
            <button 
                onClick={() => setCount(count + 1)}
            >+</button>
        </div>
    )
}