// store.js
import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import cardReducer from './cardSlice';
import ongoingOrdersReducer from './ongoingOrdersSlice';
import orderHistoryReducer from './orderHistorySlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    card: cardReducer,
    ongoingOrders: ongoingOrdersReducer,
    orderHistory: orderHistoryReducer,
  },
});

export default store;
