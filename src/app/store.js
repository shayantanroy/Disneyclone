import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import movieReducer from '../features/movie/Movieslice';
export const store = configureStore({
  reducer: {
    movie:movieReducer
    // counter: counterReducer,
  },
});
