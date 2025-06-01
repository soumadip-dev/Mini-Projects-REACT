import Counter from './Components/Counter';
import { CountContextProvider } from './Context/CountContextProvider';

// import TodoList from './Components/TodoList';

import Form from './Components/Form';
import Counter_Reducer from './Components/Counter_Reducer';

function App() {
  return (
    <>
      <CountContextProvider>
        <Counter />
      </CountContextProvider>

      <Counter_Reducer />
      {/* <TodoList /> */}
      <Form />
    </>
  );
}

export default App;
