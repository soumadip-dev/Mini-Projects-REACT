import { useEffect, useState } from 'react';
import '../todo.css';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, hasLoaded]);

  const handleSubmit = () => {
    if (input.trim() !== '') {
      setTodos(todos => {
        return todos.concat({
          text: input,
          id: Date.now(),
        });
      });
    }
    setInput('');
  };

  const removeTodo = id => {
    setTodos(todos.filter(t => t.id !== id));
  };
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Add a new todo"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
