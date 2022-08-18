import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    role: "",
    name: "",
    userName: "",
    email: "",
    image: "",
  },
  reducers: {
    setId(state, actions) {
      state.id = actions.payload;
    },
    setRole(state, actions) {
      state.role = actions.payload;
    },
    setName(state, actions) {
      state.name = actions.payload;
    },
    setUserName(state, actions) {
      state.userName = actions.payload;
    },
    setEmail(state, actions) {
      state.email = actions.payload;
    },
    setImage(state, actions) {
      state.image = actions.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
