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

import counterSlice from "./slices/CounterSlices";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  counter: counterSlice.reducer,
  user: userSlice.reducer,
});

const middlewareEnhancer = applyMiddleware(
  changeDark(),
  changeLight(),
  themeStatus(),
  token(),
  existingToken(),
  userInfos(),
  setUserInfos()
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
