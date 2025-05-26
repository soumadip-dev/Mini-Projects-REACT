import React, { useState, useReducer } from 'react';

function Counter() {
  const initialState = {
    counter: 0,
  };
  const reducer = (state, { type, value }) => {
    switch (type) {
      case 'INCREMENT':
        return { counter: state.counter + value };
      case 'DECREMENT':
        return { counter: state.counter - value };
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: 'INCREMENT', value: 1 });
  const decrement = () => dispatch({ type: 'DECREMENT', value: 1 });

  return (
    <div style={containerStyle}>
      <h1 style={countStyle}>{count.counter}</h1>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={increment}>
          +
        </button>
        <button style={{ ...buttonStyle, backgroundColor: '#dc3545' }} onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;

// Styles
const containerStyle = {
  padding: '40px',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  background: '#f7f9fc',
  minHeight: '70vh',
};

const countStyle = {
  fontSize: '72px',
  color: '#333',
  marginBottom: '20px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const buttonStyle = {
  padding: '15px 30px',
  fontSize: '24px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#007BFF',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};
