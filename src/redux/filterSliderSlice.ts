import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredProducts: [],
};

const filterSliderSlice = createSlice({
  name: 'filterSlider',
  initialState,
  reducers: {
    updateFilteredProducts(state, action) {
      const { products } = action.payload;
      state.filteredProducts = products; 
    },
    updateFilteredProductsCategory(state, action) {
      const { products } = action.payload;
      state.filteredProducts = products; 
    },
  },
});

export const { updateFilteredProducts,updateFilteredProductsCategory } = filterSliderSlice.actions;
export default filterSliderSlice.reducer;
