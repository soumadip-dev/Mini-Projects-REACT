import { useDispatch, useSelector } from 'react-redux';
import Counter from './components/Counter';
import Stats from './components/Stats';
import { decrement, increment } from './features/counters/counterSlice';

const App = () => {
  const counters = useSelector(state => state.counters);

  const dispatch = useDispatch();

  const handleIncrement = id => {
    dispatch(increment(id));
  };
  const handleDecrement = id => {
    dispatch(decrement(id));
  };

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Simple Counter App</h1>

      <div className="flex flex-col items-center gap-4 mb-4">
        {counters.map(counter => (
          <Counter
            key={counter.id}
            count={counter.value}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
        <Stats count={totalCount} />
      </div>
    </div>
  );
};

export default App;
