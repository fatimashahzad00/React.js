import React from 'react'
import { useState } from 'react';


const Counters = () => {
    const [count, setCount] = useState(0);
    
    
    function handleClick() {
        setCount(count + 1);
    }
    
    
    return (
        <div>
      <h1>Counters that update separately</h1>
      <Button  count={count} onClick={handleClick} /> {/* count passing as props*/ }
      <Button  count={count} onClick={handleClick}/>
    </div>
  )
}

export default Counters


function Button({count, onClick}) {
    return(
        <button onClick={onClick}>
            Clicked {count} times

        </button>
    )
}