import { configureStore } from '@reduxjs/toolkit';
import numberReducer from '../features/tasks/numberSlice'

export const store = configureStore({
  reducer:{
    numbers: numberReducer,
  }
});