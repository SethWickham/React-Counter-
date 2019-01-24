import React from 'react';

//import { parseInt } from 'url';

const Counter = ({
  count,
  count2,
  onDecrement,
  onIncrement,
  onAddNumber,
  onNumberChanged
}) => {
  //inline style for Counter
  const boxStyle = {
    margin: '40px',
    border: '5px dotted black',
    fontSize: '35px',
    textAlign: 'center'
  };

  //inline button styler
  const btnStyle = {
    margin: '40px',
    fontSize: '15px',
    textAlign: 'center'
  };

  return (
    <div>
      <div style={boxStyle}>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
        <br />
        <span>
          The number of times the increment/decrement buttons have been clicked:{' '}
          {count2}
        </span>
        <br />
        <input
          placeholder="Please Enter A Number"
          onChange={event => onNumberChanged(parseInt(event.target.value))}
          type="text"
        />
        <button style={btnStyle} onClick={onAddNumber}>
          Change Counter Number
        </button>
      </div>
    </div>
  );
};

export default Counter;
