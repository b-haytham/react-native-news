import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticaleType } from "../../types/News";

type InitialState = {
  favouriteNews: ArticaleType[] | [];
};

const initialState: InitialState = {
  favouriteNews: [],
};

const favouriteSlice = createSlice({
  name: "favouriteSlice",
  initialState: initialState,
  reducers: {
    addToFavourite(state, action: PayloadAction<ArticaleType>) {
      state.favouriteNews = [action.payload, ...state.favouriteNews];
    },
    removeFromFavourite(state, action: PayloadAction<string>) {
      state.favouriteNews = state.favouriteNews.filter(
        (news) => news._id !== action.payload
      );
    },
    clearAll(state) {
      state.favouriteNews = [];
    },
  },
});

export const {
  addToFavourite,
  clearAll,
  removeFromFavourite,
} = favouriteSlice.actions;

export default favouriteSlice.reducer;
