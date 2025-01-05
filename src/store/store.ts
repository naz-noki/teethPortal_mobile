import { combineReducers, configureStore } from "@reduxjs/toolkit";
import languagesReducer from "./slices/languages/index";

export const store = configureStore({
  reducer: combineReducers({
    languagesReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
