// themeSlice.ts

import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  isDarkMode: boolean;
  isMobile: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
  isMobile: false
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setMobile(state, action) {
      state.isMobile = action.payload;
    }
  },
});

export const { toggleTheme, setMobile } = themeSlice.actions;
export default themeSlice.reducer;
