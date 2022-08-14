import { createSlice } from "@reduxjs/toolkit";

export const TOKEN_TIME_OUT = 900;

const initialState = {
  userData: {
    userEmail: "",
    userCode: null,
  },
  accessToken: null,
  expireTime: null,
  userLogin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessTokenAction: (state, action) => {
      // console.log("action", action);
      state.accessToken = action.payload;
      state.expireTime = new Date().getTime + TOKEN_TIME_OUT;
    },
    fetchUserSuccess: (state, action) => {
      // console.log("action2", action);
      state.userLogin = true;
      state.expireTime = new Date().getTime + TOKEN_TIME_OUT;
      state.accessToken = action.payload.accessToken;
      state.userData.userEmail = action.payload.userEmail;
      state.userData.userCode = action.payload.userCode;
    },
    userLogoutAction: (state) => {
      state.userLogin = false;
      state.accessToken = null;
      state.expireTime = null;
    },
  },
});

export const { setAccessTokenAction, fetchUserSuccess, userLogoutAction } =
  userSlice.actions;

export default userSlice.reducer;
