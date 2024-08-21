import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cartItems.push({...newItem, quantity: newItem.quantity});
      }
      state.totalAmount += newItem.price * newItem.quantity;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
        state.totalAmount -= existingItem.price * existingItem.quantity;
      }
    },
    updateItemQuantity: (state, action) => {
      const {id, quantity} = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalAmount += existingItem.price * quantity;
      }
    },
  },
});

export const {addItemToCart, removeItemFromCart, updateItemQuantity} =
  cartSlice.actions;

export default cartSlice.reducer;
