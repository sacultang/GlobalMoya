import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keywordList: [],
};

// ! reducers: swtich case에서 fucntion으로 바꾼다.
export const keywordListSlice = createSlice({
  name: "keywordList",
  initialState,
  reducers: {
    addKeywordListAction: (state, action) => {
      state.keywordList = action.payload.reports;
    },
  },
});

export const { addKeywordListAction } = keywordListSlice.actions;

export default keywordListSlice.reducer;
