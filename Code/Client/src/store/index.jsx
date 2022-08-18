import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth-slice";
import userSlice from "./user-slice";
const store = configureStore({
  reducer: { loggedIn: authSlice.reducer, user: userSlice.reducer },
});

export default store;
