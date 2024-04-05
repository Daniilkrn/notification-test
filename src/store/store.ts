import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './reducers/modalSlice.ts';
import loaderSlice from './reducers/loaderSlice';
import barSlice from './reducers/progressBarSlice.ts';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    loader: loaderSlice,
    bar: barSlice,
  },
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;