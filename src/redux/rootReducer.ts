import { combineReducers } from "@reduxjs/toolkit";
import favouriteSlice from "./favourite/favouriteSlice";
import languageSlice from "./language/languageSlice";
import newsSlice from "./news/newsSlice";
import themeSlice from "./theme/themeSlice";


const rootReducer = combineReducers({
    themeSlice: themeSlice,
    newsSclice: newsSlice,
    favouriteSlice: favouriteSlice,
    languageSlice: languageSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

