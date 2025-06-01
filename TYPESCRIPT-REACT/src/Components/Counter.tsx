import type { FC } from 'react';
import { useCount } from '../Context/CountContextProvider';
const Counter: FC = () => {
  const { count, Increment, Decrement } = useCount();
  return (
    <div>
      <h1>Counter App: </h1>
      <p>Count: {count}</p>
      <button onClick={() => Increment()}>Increment</button>
      <button onClick={() => Decrement()}>Decrement</button>
    </div>
  );
};
export default Counter;
