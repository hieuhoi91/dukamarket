import { configureStore } from '@reduxjs/toolkit';
import CartSlice from '../Features/cartSlice';

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
