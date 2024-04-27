import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import filterSlider from './filterSliderSlice';
import likedProductsReducer from "./likedSlice"

export const store = configureStore({
  reducer: {
    card: cardReducer,
    filterSlider: filterSlider,
    likedProducts: likedProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;