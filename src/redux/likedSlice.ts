import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface LikedProduct {
  id: number;
  quantity: number;
}

interface LikedProductsState {
  items: LikedProduct[];
}

const initialState: LikedProductsState = {
  items: [],
}; 

const likedProductsSlice = createSlice({
  name: 'likedProducts',
  initialState,
  reducers: {
    addLikedProduct: (state, action: PayloadAction<LikedProduct>) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
      if (existingItemIndex !== -1) {
        state.items.splice(existingItemIndex, 1);
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeLikedProduct: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },
  },
});

export const { addLikedProduct, removeLikedProduct } = likedProductsSlice.actions;
export const selectLikedProducts = (state: RootState) => state.likedProducts.items;
export default likedProductsSlice.reducer;