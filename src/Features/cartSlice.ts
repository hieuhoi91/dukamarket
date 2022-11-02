import { createSlice } from '@reduxjs/toolkit';
import { IProducts } from '../data/products';
import { RootState } from '../store/store';

export interface CartState {
  cart: IProducts[];
}

const initialStateCart: CartState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState: initialStateCart,

  reducers: {
    addItem: (state, action) => {
      const a = state.cart.find(i => {
        return i.image === action.payload.image;
      });
      if (a) {
        if (!a.quantity) {
          a.quantity = 1;
        }
        a.quantity += 1;
      } else {
        const newObj = Object.assign({ quantity: 1 }, action.payload);
        state.cart.push(newObj);
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        item => item.image !== action.payload.image
      );
    },
    increment: (state, action) => {},
  },
});

export const selectCart = (state: RootState) => state.cart.cart;

export const { addItem, removeItem } = CartSlice.actions;

export default CartSlice.reducer;
