import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const ongoingOrdersSlice = createSlice({
  name: 'ongoingOrders',
  initialState,
  reducers: {
    addOrderToOngoing: (state, action) => {
      state.push(action.payload);
    },
    confirmOrder: (state, action) => {
      const orderIndex = state.findIndex(
        order => order.id === action.payload.id,
      );
      if (orderIndex !== -1) {
        state[orderIndex].status = 'delivered';
      }
    },
    cancelOrder: (state, action) => {
      const orderIndex = state.findIndex(
        order => order.id === action.payload.id,
      );
      if (orderIndex !== -1) {
        state[orderIndex].status = 'cancelled';
      }
    },
  },
});

export const {confirmOrder, cancelOrder, addOrderToOngoing} =
  ongoingOrdersSlice.actions;

export default ongoingOrdersSlice.reducer;
