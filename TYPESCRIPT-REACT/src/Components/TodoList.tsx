import { useState, useEffect } from 'react';

const styles = {
  container: {
    padding: '20px',
    maxWidth: '500px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center' as const,
    color: '#333',
  },
  input: {
    padding: '8px',
    width: '70%',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none' as const,
    padding: 0,
    marginTop: '20px',
  },
  listItem: {
    backgroundColor: '#fff',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  actionButtons: {
    marginLeft: '10px',
    cursor: 'pointer',
  },
  editInput: {
    padding: '6px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
};

const TodoList = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedTodo, setEditedTodo] = useState<string>('');

  useEffect(() => {
    const data = localStorage.getItem('todos');
    if (data) setTodo(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        style={styles.input}
      />
      <button
        onClick={() => {
          if (newTodo.trim() !== '') {
            setTodo([...todo, newTodo]);
            setNewTodo('');
          }
        }}
        style={styles.button}
      >
        Add Todo
      </button>

      <ul style={styles.list}>
        {todo.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedTodo}
                  onChange={e => {
                    setEditedTodo(e.target.value);
                  }}
                  style={styles.editInput}
                />
                <button
                  onClick={() => {
                    const updatedTodos = [...todo];
                    if (editedTodo.trim() !== '') updatedTodos[index] = editedTodo;
                    setTodo(updatedTodos);
                    setEditingIndex(null);
                    setNewTodo('');
                  }}
                  style={styles.button}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{item}</span>
                <span>
                  <span
                    onClick={() => setTodo(todo.filter((_, i) => i !== index))}
                    style={styles.actionButtons}
                  >
                    ❌
                  </span>
                  <span
                    onClick={() => {
                      setEditingIndex(index);
                      setEditedTodo(item);
                    }}
                    style={styles.actionButtons}
                  >
                    ✏️
                  </span>
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
