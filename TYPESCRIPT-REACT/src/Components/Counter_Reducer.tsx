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
    <div className="min-h-screen flex flex-col items-center justify-center  p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Counter App with Reducer
        </h1>
        <div className="text-center mb-8">
          <p className="text-4xl font-semibold text-blue-600">Count: {count.count}</p>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => dispatch({ type: 'Increment' })}
            className="btn btn-success px-6 py-2 text-white"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: 'Decrement' })}
            className="btn btn-error px-6 py-2 text-white"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter_Reducer;
