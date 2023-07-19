import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './reducer';


const store = configureStore({
  reducer: {
    movie: bookReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;