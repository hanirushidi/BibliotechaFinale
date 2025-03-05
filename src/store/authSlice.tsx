import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token") || "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: any, action) => {
      const idToken = action.payload;
      localStorage.setItem("token", idToken);

      state.token = idToken;
      state.isAuthenticated = true;
    },
    logout: (state: any) => {
      localStorage.removeItem("token");

      state.token = "";
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
