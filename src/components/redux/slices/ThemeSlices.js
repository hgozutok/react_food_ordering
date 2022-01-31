import { createSlice } from "@reduxjs/toolkit";

var enums = { light: "bg-white", dark: "dark" };

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: enums.light,
  },
  reducers: {
    changeDark: (state) => {
      return { ...state, theme: enums.dark };
    },
    changeLight: (state) => {
      return { ...state, theme: enums.light };
    },
    themeStatus: (state) => {
      return state.theme;
    },
  },
});

export const { changeDark, changeLight, themeStatus } = themeSlice.actions;

export default themeSlice;
