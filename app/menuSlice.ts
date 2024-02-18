import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  currentActiveMenu: string;
}

const initialState: MenuState = {
  currentActiveMenu: "Home",
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setCurrentActiveMenu(state, action: PayloadAction<string>) {
      state.currentActiveMenu = action.payload;
    }
  },
});

export const { setCurrentActiveMenu } = menuSlice.actions;
export default menuSlice.reducer;
