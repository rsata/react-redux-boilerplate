import React from 'react';

export const Name = (props) => {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <div>
        <button id='submit' onClick={()=>props.nameChange('Reid')}>Change</button>
      </div>
    </div>
  )
}

