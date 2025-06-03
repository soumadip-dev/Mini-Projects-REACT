import { useState, useEffect } from 'react';

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 bg-blue-600">
          <h1 className="text-2xl font-bold text-center text-white">Todo List</h1>
        </div>

        <div className="p-6">
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={newTodo}
              onChange={e => setNewTodo(e.target.value)}
              placeholder="Add a new todo"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => {
                if (newTodo.trim() !== '') {
                  setTodo([...todo, newTodo]);
                  setNewTodo('');
                }
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add
            </button>
          </div>

          <ul className="space-y-3">
            {todo.map((item, index) => (
              <li
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center"
              >
                {editingIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editedTodo}
                      onChange={e => {
                        setEditedTodo(e.target.value);
                      }}
                      className="flex-1 px-3 py-1 mr-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => {
                        const updatedTodos = [...todo];
                        if (editedTodo.trim() !== '') updatedTodos[index] = editedTodo;
                        setTodo(updatedTodos);
                        setEditingIndex(null);
                        setNewTodo('');
                      }}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-gray-800">{item}</span>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setTodo(todo.filter((_, i) => i !== index))}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        ❌
                      </button>
                      <button
                        onClick={() => {
                          setEditingIndex(index);
                          setEditedTodo(item);
                        }}
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                      >
                        ✏️
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
