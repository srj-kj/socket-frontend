import { createSlice } from "@reduxjs/toolkit";

const userState = {
  isLogged: false,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    login: (state, action) => {
      return { isLogged: true, user: action.payload };
    },
    logout: () => {
      return userState;
    },
   
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
