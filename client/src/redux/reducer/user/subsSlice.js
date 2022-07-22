import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subsUser: {},
};

// ! reducers: swtich case에서 fucntion으로 바꾼다.
export const subsSlice = createSlice({
  name: "subsUser",
  initialState,
  reducers: {
    subsUserAction: (state, action) => {
      state.subsUser = action.payload;
    },
  },
});

export const { subsUserAction } = subsSlice.actions;

export default subsSlice.reducer;
