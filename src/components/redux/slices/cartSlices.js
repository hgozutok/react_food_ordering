import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },

  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
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
    cartTotal: (state) => {
      return state.total;
    },
    updateCart: (state, action) => {
      state.items = action.payload;
    },
    cartItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  cartTotal,
  updateCart,
  cartItems,
} = cartSlice.actions;

export default cartSlice;
