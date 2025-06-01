import { useReducer } from 'react';

interface stateType {
  count: number;
}

interface actionType {
  type: 'Increment' | 'Decrement';
}

const reducer = (state: stateType, action: actionType): stateType => {
  switch (action.type) {
    case 'Increment':
      return { count: state.count + 1 };
    case 'Decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter_Reducer = () => {
  const [count, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>Couner App with Reducer</h1>
      <p>Count: {count.count}</p>
      <button onClick={() => dispatch({ type: 'Increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'Decrement' })}>Decrement</button>
    </div>
  );
};
export default Counter_Reducer;
