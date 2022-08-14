import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showDelGroupBtn: false,
  checkedGroupBtn: [],
};

export const scrapgroupCheckSlice = createSlice({
  name: "scrapgroupCheck",
  initialState,
  reducers: {
    showDelBtnGroupAction: (state, action) => {
      state.showDelGroupBtn = action.payload;
    },
    addCheckedGroupBtn: (state, action) => {
      state.checkedGroupBtn.push(action.payload);
    },
    delCheckedGroupBtn: (state, action) => {
      state.checkedGroupBtn.pop(action.payload);
    },
    initCheckedGroupAction: (state) => {
      state.showDelGroupBtn = initialState.showDelGroupBtn;
      state.checkedGroupBtn = initialState.checkedGroupBtn;
    },
  },
});

export const {
  showDelBtnGroupAction,
  addCheckedGroupBtn,
  delCheckedGroupBtn,
  initCheckedGroupAction,
} = scrapgroupCheckSlice.actions;

export default scrapgroupCheckSlice.reducer;
