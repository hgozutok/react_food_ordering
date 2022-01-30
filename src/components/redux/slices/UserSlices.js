import { createSlice, configureStore } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    token: "123",
  },
  reducers: {
    token: (state, payload) => {
      // console.log(state.token);
      return { ...state, token: payload.payload };
    },
    existingToken: (state) => {
      return state;
    },
    userInfos: (state) => {
      return state.user;
    },
    setUserInfos: (state, payload) => {
      // console.log("pl", payload.payload);
      return { ...state, user: payload.payload };
    },
  },
});

export const { token, userInfos, setUserInfos, existingToken } =
  userSlice.actions;

export default userSlice;
