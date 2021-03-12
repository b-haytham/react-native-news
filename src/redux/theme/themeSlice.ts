import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialState = {
  themeMode: 'DARK' | 'LIGHT';
};

const initialState: InitialState = {
  themeMode: 'DARK',
};

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: initialState,
  reducers: {
    toggletheme(state, action: PayloadAction<'DARK' | 'LIGHT'>) {
      action.payload === 'DARK'
        ? (state.themeMode = 'LIGHT')
        : (state.themeMode = 'DARK');
    },
  },
});

export const {toggletheme} = themeSlice.actions;

export default themeSlice.reducer;
