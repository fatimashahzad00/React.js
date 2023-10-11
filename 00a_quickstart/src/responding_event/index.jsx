import React from 'react';
import './style.css';

function MyButton() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick} className='mybutton'>
            Click me
        </button>
    )
}

export default MyButton;