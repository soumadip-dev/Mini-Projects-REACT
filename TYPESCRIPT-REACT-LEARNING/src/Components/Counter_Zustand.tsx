import { useCountStorePersist } from '../Store/CountStorePersist.ts';

const Counter_Zustand = () => {
  const count = useCountStorePersist(state => state.count);
  const Increment = useCountStorePersist(state => state.increment);
  const Decrement = useCountStorePersist(state => state.decrement);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Counter App</h1>
        <p className="text-4xl font-semibold text-blue-600 mb-6">Count: {count}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => Increment()}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Increment
          </button>
          <button
            onClick={() => Decrement()}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter_Zustand;
