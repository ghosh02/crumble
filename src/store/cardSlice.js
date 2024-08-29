import {createSlice} from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [], // Array to hold card details
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter(card => card.id !== action.payload.id);
    },
  },
});

export const {addCard, removeCard} = cardSlice.actions;
export default cardSlice.reducer;
