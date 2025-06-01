import Counter from './Components/Counter';
import { CountContextProvider } from './Context/CountContextProvider';

// import TodoList from './Components/TodoList';

import Form from './Components/Form';

function App() {
  return (
    <>
      <CountContextProvider>
        <Counter />
      </CountContextProvider>

      {/* <TodoList /> */}
      <Form />
    </>
  );
}

export default App;
