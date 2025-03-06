import { createStore } from 'redux';

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

dispatch({ type: 'ADD_TODO', payload: { todoText: 'Todo 1' } });
dispatch({ type: 'ADD_TODO', payload: { todoText: 'Todo 2' } });
dispatch({ type: 'DELETE_TODO', payload: { id: 1 } });
dispatch({ type: 'EDIT_TODO', payload: { id: 2, todoText: 'Todo 2 edited' } });


