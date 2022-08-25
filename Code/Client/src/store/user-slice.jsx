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
    field: "",
    youtube: "",
    linkedin: "",
    facebook: "",
    phone: "",
    description: "",
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
    setField(state, actions) {
      state.field = actions.payload;
    },
    setDescription(state, actions) {
      state.description = actions.payload;
    },
    setFacebook(state, actions) {
      state.facebook = actions.payload;
    },
    setPhone(state, actions) {
      state.phone = actions.payload;
    },
    setLinkedin(state, actions) {
      state.linkedin = actions.payload;
    },
    setYoutube(state, actions) {
      state.youtube = actions.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
