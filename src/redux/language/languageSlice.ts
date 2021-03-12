import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "../store";

import { arabicNews, deutschNews, englishNews } from "../news/newsSlice";

type InitialState = {
  language:
    | { name: "Arabic"; value: "ar" }
    | { name: "English"; value: "en" }
    | { name: "Deutsch"; value: "de" };
};

const initialState: InitialState = {
  language: {
    name: "English",
    value: "en",
  },
};

const themeSlice = createSlice({
  name: "languageSlice",
  initialState: initialState,
  reducers: {
    switchToAR(state) {
      state.language = {
        name: "Arabic",
        value: "ar",
      };
    },
    switchToDE(state) {
      state.language = {
        name: "Deutsch",
        value: "de",
      };
    },
    switchToEN(state) {
      state.language = {
        name: "English",
        value: "en",
      };
    },
  },
});

export const { switchToAR, switchToDE, switchToEN } = themeSlice.actions;

export default themeSlice.reducer;
