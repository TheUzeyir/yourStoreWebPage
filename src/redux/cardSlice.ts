import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface Product {
  id: number;
  count: number;
}

interface CardState {
  value: Product[];
}

const initialState: CardState = {
  value: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      
      
      const newItem = action.payload;
      const existingItem = state.value.find(item => item.id === newItem.id) as any;      

      if (existingItem) {
        existingItem.count = newItem.count;
      } else {
        state.value = [newItem] as Product[];
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      state.value = state.value.filter(item => item.id !== idToRemove);
    }, 
    increaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const itemToIncrease = state.value.find(item => item.id === id);
      if (itemToIncrease) {
        itemToIncrease.count += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const itemToDecrease = state.value.find(item => item.id === id);
      if (itemToDecrease && itemToDecrease.count > 1) {
        itemToDecrease.count -= 1;
      }
    }
  },
}); 

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cardSlice.actions;

export default cardSlice.reducer;
