import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "../reducer/user/userSlice";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import buttonSlice from "../reducer/buttonSlice";
import modalSlice from "../reducer/modalSlice";
import cardTypeSlice from "../reducer/cardTypeSlice";
import categorySlice from "../reducer/categorySlice";
import subsSlice from "../reducer/user/subsSlice";
import keywordConnectedSlice from "../reducer/keywordConnectedSlice";
import searchFilterSlice from "../reducer/searchFilterSlice";
import ScrapFolderSlice from "../reducer/scrapFolderSlice";
import scrapNewsSlice from "../reducer/scrapNewsSlice";
import scrapFolderSlice from "../reducer/scrapFolderSlice";
import scrapCheckboxSlice from "../reducer/scrapCheckboxSlice";
import scrapgroupCheckSlice from "../reducer/scrapgroupCheckSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["modalSlice", "categorySlice", "buttonSlice"],
};

const rootReducer = combineReducers({
  user: userSlice,
  buttonSlice,
  modalSlice,
  cardTypeSlice,
  categorySlice,
  subsSlice,
  keywordConnectedSlice,
  searchFilterSlice,
  ScrapFolderSlice,
  scrapNewsSlice,
  scrapFolderSlice,
  scrapCheckboxSlice,
  scrapgroupCheckSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const persistor = persistStore(store);
export default store;
