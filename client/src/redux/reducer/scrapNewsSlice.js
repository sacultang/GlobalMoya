import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showScrapCheckBtn: false,
  newsId: "",
  groupId: "",
};

// ! reducers: swtich case에서 fucntion으로 바꾼다.
export const scrapNewsSlice = createSlice({
  name: "scrapCheck",
  initialState,
  reducers: {
    togglenNewsCheckBtn: (state, action) => {
      state.showScrapCheckBtn = action.payload;
    },
    addNewsID: (state, action) => {
      state.newsId = action.payload;
    },
    addGroupId: (state, action) => {
      state.groupId = action.payload;
    },
  },
});

export const { togglenNewsCheckBtn, addNewsID, addGroupId } =
  scrapNewsSlice.actions;

export default scrapNewsSlice.reducer;
