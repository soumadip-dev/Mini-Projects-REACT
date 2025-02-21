import { createStore, bindActionCreators } from 'redux';

function todoReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      const todoText = action.payload.todoText;
      return [
        ...state,
        {
          text: todoText,
          isFinished: false,
          id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
        },
      ];
    case 'DELETE_TODO':
      const id = action.payload.id;
      return state.filter(t => t.id !== id);
    case 'EDIT_TODO':
      const todoId = action.payload.id;
      const todoTxt = action.payload.todoText;
      return state.map(t => (t.id === todoId ? { ...t, text: todoTxt } : t));
    default:
      return state;
  }
}

const { dispatch, subscribe, getState, replaceReducer } = createStore(todoReducer, []);

subscribe(() => console.log(getState()));

// action objects => action methods (action creators)
const addTodo = todoText => ({ type: 'ADD_TODO', payload: { todoText } });
const deleteTodo = id => ({ type: 'DELETE_TODO', payload: { id } });
const editTodo = (id, todoText) => ({ type: 'EDIT_TODO', payload: { id, todoText } });

const actions = bindActionCreators({ addTodo, deleteTodo, editTodo }, dispatch);

actions.addTodo('Todo 1');
actions.addTodo('Todo 2');
actions.deleteTodo(1);
actions.editTodo(2, 'New Todo 2');
