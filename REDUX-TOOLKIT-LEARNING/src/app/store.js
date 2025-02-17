import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counters/counterSlice.js';

const store = configureStore({
  reducer: {
    counters: counterReducer,
  },
});

export default store;
