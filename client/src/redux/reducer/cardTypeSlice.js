import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewType: "",
};

// ! reducers: swtich case에서 fucntion으로 바꾼다.
export const cardTypeSlice = createSlice({
  name: "cardView",
  initialState,
  reducers: {
    cardTypeAction: (state, action) => {
      state.viewType = action.payload;
    },
  },
});

export const { cardTypeAction } = cardTypeSlice.actions;

export default cardTypeSlice.reducer;
