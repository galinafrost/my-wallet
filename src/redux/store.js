import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./auth/auth-slice";

export const store = configureStore({
  reducer: {
    logIn: authSlice.reducer,
  },
});
