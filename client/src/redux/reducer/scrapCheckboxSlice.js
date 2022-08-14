import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showDelScrapBtn: false,
  checkedScrapBtn: [],
};

export const scrapCheckboxSlice = createSlice({
  name: "scrapCheckbox",
  initialState,
  reducers: {
    //스크랩 편집 쪽 체크박스
    showDelBtnScrapAction: (state, action) => {
      state.showDelScrapBtn = action.payload;
    },
    addCheckedScrapBtn: (state, action) => {
      state.checkedScrapBtn.push(action.payload);
    },
    delCheckedScrapBtn: (state, action) => {
      state.checkedScrapBtn.pop(action.payload);
    },
    initCheckedScrapAction: (state) => {
      state.showDelScrapBtn = initialState.showDelScrapBtn;
      state.checkedScrapBtn = initialState.checkedScrapBtn;
    },
  },
});

export const {
  showDelBtnScrapAction,
  addCheckedScrapBtn,
  delCheckedScrapBtn,
  initCheckedScrapAction,
} = scrapCheckboxSlice.actions;

export default scrapCheckboxSlice.reducer;
