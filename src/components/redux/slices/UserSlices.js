import { createSlice, configureStore } from "@reduxjs/toolkit";

var enums = { light: "bg-white", dark: "dark" };

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    token: "",
  },
  reducers: {
    token: (state) => {
      return state.token;
    },
    userInfos: (state) => {
      return state.user;
    },
    setUserInfos: (state) => {
      return { ...state, user: state.user };
    },
  },
});

export const { token, userInfos, setUserInfos } = userSlice.actions;

export default userSlice;
