import { useState } from 'react';

export function Accordion() {

    const [ isToggled, setIsToggled ] = useState(false);

    // const showMe = isToggled ? (<h3>Show Me</h3>) : null;

    return (
        <div>
    
    {/* Can use either of these expression to determin if isToggled state */}

            {/* {showMe} */}

            {/* { isToggled ?
                <h3>Show Me</h3>
                : null
            } */}

            { isToggled &&
                <h3>Show Me</h3>
            }            
            <button
                onClick={() => setIsToggled(!isToggled)}
            >Toggle</button>
        </div>
    )
}