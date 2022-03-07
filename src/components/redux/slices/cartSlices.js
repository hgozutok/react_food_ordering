import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
      state.total -= action.payload.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
    cartTotal: (state, action) => {
      state.total = action.payload;
    },
    updateCart: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItem, removeItem, clearCart, cartTotal, updateCart } =
  cartSlice.actions;

export default cartSlice;
