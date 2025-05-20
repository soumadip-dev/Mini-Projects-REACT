import React, { useState } from 'react';
import '../counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>
      <div className="btns-container">
        <button className="increment" onClick={increment}>
          +
        </button>
        <button className="increment" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
