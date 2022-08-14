import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lvCategory: {},
  masterData: {},
  keyword: "",
  loading: true,
};

// ! reducers: swtich case에서 fucntion으로 바꾼다.
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addLvCateAction: (state, action) => {
      state.lvCategory = action.payload;
    },
    addDataAction: (state, action) => {
      // console.log(action.payload);
      state.masterData = action.payload;
    },
    searchKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { addLvCateAction, addDataAction, searchKeyword, isLoading } =
  categorySlice.actions;

export default categorySlice.reducer;
