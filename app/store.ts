// store.ts

import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import menuSlice from './menuSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    menu:menuSlice,
  },
});

export default store;
