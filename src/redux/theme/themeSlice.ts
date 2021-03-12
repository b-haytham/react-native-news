import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "./blue-theme";

type InitialState = {
    themeMode: 'DARK' | 'LIGHT'
    theme: typeof Theme
}

const initialState: InitialState = {
    themeMode: 'DARK',
    theme: Theme
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: initialState,
    reducers: {
        toggletheme(state, action: PayloadAction<'DARK' | "LIGHT">) {
            action.payload === 'DARK' ? state.themeMode = 'LIGHT' : state.themeMode = 'DARK' 
        }
    } 
})

export const { toggletheme } = themeSlice.actions

export default themeSlice.reducer