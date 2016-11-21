import React from 'react';

export const Counter = (props) => {
  return (
    <div>
      <h1>{props.count.count}</h1>
      <div>
        <button id='submit' onClick={()=>props.inc(1)}>Increment</button>
        <button id='submit' onClick={()=>props.dec(1)}>Decrement</button>
      </div>
    </div>
  )
}

