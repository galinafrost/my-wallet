import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  password: "",
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.password = action.payload;
      state.isLogin = true;
    },
    logOut(state) {
      state.password = "";
      state.isLogin = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
