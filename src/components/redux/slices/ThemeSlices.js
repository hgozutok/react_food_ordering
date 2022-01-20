import { createSlice, configureStore } from "@reduxjs/toolkit";

var enums = { light: "bg-white", dark: "dark" };

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: enums.light,
  },
  reducers: {
    changeDark: (state) => {
      return { theme: enums.dark };
    },
    changeLight: (state) => {
      return { theme: enums.light };
    },
    themeStatus: (state) => {
      return state.theme;
    },
  },
});

export const { changeDark, changeLight, themeStatus } = themeSlice.actions;

export default themeSlice;
