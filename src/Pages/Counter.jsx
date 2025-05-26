import React, { useState, useReducer } from 'react';

function Counter() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch('INCREMENT');
  const decrement = () => dispatch('DECREMENT');

  return (
    <div style={containerStyle}>
      <h1 style={countStyle}>{count}</h1>
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
