import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keywordList: [],
  keyTypeList: [],
  paramValueList: [],
  exchangeList: [],
};

const keywordConnectedSlice = createSlice({
  name: "keywordList",
  initialState,
  reducers: {
    addKeywordListAction: (state, action) => {
      state.keywordList = action.payload;

      const keyTypeList = action.payload.map((obj) => {
        return obj.keyType;
      });
      const paramValueList = action.payload.map((obj) => {
        return obj.paramValue;
      });
      const exchangeList = action.payload.map((obj) => {
        return obj.exchange;
      });
      state.keyTypeList = keyTypeList;
      state.paramValueList = paramValueList;
      state.exchangeList = exchangeList;
    },
    deleteKeywordListAction: (state, action) => {},
  },
});

export const { addKeywordListAction, deleteKeywordListAction } =
  keywordConnectedSlice.actions;

export default keywordConnectedSlice.reducer;
