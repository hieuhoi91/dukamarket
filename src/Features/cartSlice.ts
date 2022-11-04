import { createSlice } from '@reduxjs/toolkit';
import { ICartItem } from '../data/products';
import { RootState } from '../store/store';

export interface CartState {
  cart: ICartItem[];
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
    increment: (state, action) => {
      state.cart.forEach(item => {
        if (action.payload.image === item.image) {
          item.quantity++;
        }
      });
    },

    decrement: (state, action) => {
      state.cart.forEach(item => {
        if (action.payload.image === item.image && item.quantity > 0) {
          item.quantity--;
        }
      });
      state.cart = state.cart.filter(item => item.quantity > 0);
    },

    changeQuantity: (state, action) => {
      state.cart.forEach(item => {
        if (action.payload.image === item.image) {
          item.quantity = action.payload.quantity;
        }
      });
    },
  },
});

export const selectCart = (state: RootState) => state.cart.cart;

export const { addItem, removeItem, increment, decrement, changeQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
