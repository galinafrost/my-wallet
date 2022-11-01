import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./auth/aut-slice";

export const store = configureStore({
  reducer: {
    logIn: authSlice.reducer,
  },
});
