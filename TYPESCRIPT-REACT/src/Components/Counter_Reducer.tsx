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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
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
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: 'Decrement' })}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter_Reducer;
