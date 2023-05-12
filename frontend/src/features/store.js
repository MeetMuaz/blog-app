import { configureStore } from '@reduxjs/toolkit';
import { default as blogReducer } from './blog/blogSlice';

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
  }
});
