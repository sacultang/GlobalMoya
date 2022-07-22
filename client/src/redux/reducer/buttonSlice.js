import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showEditBtn: false,
  showDelBtn: false,
  checkedBtn: [],
  delItem: [],
  //그룹편집쪽 체크
  showDelGroupBtn: false,
  checkedGroupBtn: [],
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    toggleEditAction: (state, action) => {
      console.log(action);
      state.showEditBtn = action.payload;
    },
    showDelBtnAction: (state, action) => {
      state.showDelBtn = action.payload;
    },
    addCheckedBtn: (state, action) => {
      state.checkedBtn.push(action.payload);
    },
    delCheckedBtn: (state, action) => {
      state.checkedBtn.pop(action.payload);
    },
    initCheckedAction: (state) => {
      state.showDelBtn = initialState.showDelBtn;
      state.checkedBtn = initialState.checkedBtn;
    },
    delItemsAction: (state, action) => {
      console.log("action이다", action);
      // state.delItem =
    },
    //그룹편집쪽 체크박스
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
  toggleEditAction,
  showDelBtnAction,
  addCheckedBtn,
  delCheckedBtn,
  initCheckedAction,
  delItemsAction,
  showDelBtnGroupAction,
  addCheckedGroupBtn,
  delCheckedGroupBtn,
  initCheckedGroupAction,
} = buttonSlice.actions;

export default buttonSlice.reducer;
