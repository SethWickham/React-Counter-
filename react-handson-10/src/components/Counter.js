import React from 'react';
import { parse } from 'url';

const Counter = ({ count, count2, onDecrement, onIncrement, onAddNumber, onNumberChanged, }) => {

    return (
      <div>
        <div>
        <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <br />
          <br />
          <span>The number of times the increment/decrement buttons have been clicked: {count2}</span>
          <br />
          <input onChange={event => onNumberChanged(parseInt(event.target.value))} type="text"/>
        <button onClick={onAddNumber}>Change Counter Number</button>
        </div>
      </div>
    );
}


export default Counter;
