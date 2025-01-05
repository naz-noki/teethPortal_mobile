import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { I_InitialState, Languages } from "./types";

const initialState: I_InitialState = {
  isDefault: true,
  lang: Languages.en,
};

export const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setIsDefault: (state, action: PayloadAction<boolean>) => {
      state.isDefault = action.payload;
    },
    setLang: (state, action: PayloadAction<string>) => {
      if(action.payload in Languages) state.lang = action.payload as Languages;
      else state.lang = Languages.en;
    },
  },
});

export const {  
  setIsDefault, 
  setLang,
} = languagesSlice.actions;

export default languagesSlice.reducer;
