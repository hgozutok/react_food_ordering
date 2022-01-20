import {
  applyMiddleware,
  combineReducers,
  configureStore,
  createStore,
} from "@reduxjs/toolkit";
import themeSlice, {
  changeDark,
  changeLight,
  themeStatus,
} from "./slices/ThemeSlices";
import counterSlice from "./slices/CounterSlices";
import thunkMiddleware from "redux-thunk";
import userSlice from "./slices/UserSlices";

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  counter: counterSlice.reducer,
  user: userSlice.reducer,
});

const middlewareEnhancer = applyMiddleware(
  changeDark(),
  changeLight(),
  themeStatus()
);

//const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

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
