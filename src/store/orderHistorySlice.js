import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState,
  reducers: {
    addOrderToHistory: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {addOrderToHistory} = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
