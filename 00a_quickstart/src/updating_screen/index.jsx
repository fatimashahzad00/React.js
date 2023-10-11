import React from 'react'
import { useState } from 'react';
import './style.css'


function Mybutton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick} className='button'>
            Clicked {count} times
        </button>
    )
}

export default function Counter() {
    return(
        <div>
            <h1>Counters that Update separately</h1>
            <Mybutton />
            <Mybutton />
        </div>
    );
}