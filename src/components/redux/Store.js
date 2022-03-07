import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import themeSlice, {
  changeDark,
  changeLight,
  themeStatus,
} from "./slices/ThemeSlices";
import userSlice, {
  token,
  userInfos,
  setUserInfos,
  existingToken,
} from "./slices/UserSlices";
import cartSlice, {
  addItem,
  removeItem,
  clearCart,
  cartTotal,
  updateCart,
} from "./slices/cartSlices";

import counterSlice from "./slices/CounterSlices";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  counter: counterSlice.reducer,
  user: userSlice.reducer,
  cart: cartSlice.reducer,
});

const middlewareEnhancer = applyMiddleware(
  changeDark(),
  changeLight(),
  themeStatus(),
  token(),
  existingToken(),
  userInfos(),
  setUserInfos(),
  addItem(),
  removeItem(),
  clearCart(),
  cartTotal(),
  updateCart(),
  thunkMiddleware
);

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [thunkMiddleware],
  },
  middlewareEnhancer

  // applyMiddleware(middlewareEnhancer)
);
console.log(store.getState());
// {value: 0}

export default store;
