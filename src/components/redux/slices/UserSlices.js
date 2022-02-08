import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    token: null,
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
    logOut: (state) => {
      console.log("logOut");
      return { ...state, user: {}, token: null };
    },
    setUserInfos: (state, payload) => {
      // console.log("pl", payload.payload);
      return { ...state, user: payload.payload };
    },
  },
});

export const { token, userInfos, setUserInfos, existingToken, logOut } =
  userSlice.actions;

export default userSlice;
