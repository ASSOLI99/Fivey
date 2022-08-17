import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "loggedIn",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    loggingIn(state) {
      state.loggedIn = true;
    },
    loggingOut(state) {
      state.loggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
