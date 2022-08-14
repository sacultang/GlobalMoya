import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groupName: "",
};
export const ScrapFolderSlice = createSlice({
  name: "groupName",
  initialState,
  reducers: {
    ScrapFolderChoose: (state, action) => {
      state.groupName = action.payload;
    },
  },
});

export const { ScrapFolderChoose } = ScrapFolderSlice.actions;

export default ScrapFolderSlice.reducer;
