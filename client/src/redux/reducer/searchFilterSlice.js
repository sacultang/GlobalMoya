import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchData } from "@api/searchApi";

const initialState = {
  timeFilter: "mth1",
  mediaType: "mp,op,r",
  language: "en",
  orderBy: "latest",
  keyType: "category",
  paramValue: "stocks",
  exchange: null,
  status: "Welcome",
  code: null,
  newsList: [],
  nextPageToken: null,
};

const fetchSearchNews = createAsyncThunk(
  "searchFilterSlice/fetchSearchNews",
  async (params, thunkAPI) => {
    const { queryParams, accessToken } = params;
    try {
      const response = await getSearchData(queryParams, accessToken);
      return response;
    } catch (error) {
      console.log("slice error", error);
    }
  }
);

const searchFilterSlice = createSlice({
  name: "searchFilterSlice",
  initialState,
  reducers: {
    keywordContentRequest: (state, action) => {
      state.keyType = action.payload[0];
      state.paramValue = action.payload[1];
      state.exchange = action.payload[2];
    },
    changeFilterRequest: (state, action) => {
      const { payload } = action;
      state.timeFilter = payload.timeFilter;
      state.mediaType = payload.mediaType;
      state.orderBy = payload.orderBy;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchNews.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(fetchSearchNews.fulfilled, (state, action) => {
      if (action.payload === undefined) {
        return;
      }
      state.newsList = action.payload.newsList;
      state.nextPageToken = action.payload.nextPageToken;

      state.status = "complete";
    });
    builder.addCase(fetchSearchNews.rejected, (state) => {
      state.status = "fail";
    });
  },
});

export default searchFilterSlice.reducer;
export const { keywordContentRequest, changeFilterRequest } =
  searchFilterSlice.actions;
export { fetchSearchNews };
