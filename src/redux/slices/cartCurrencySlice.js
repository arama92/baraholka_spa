import { createSlice } from '@reduxjs/toolkit';
import { getCurrencyLocalStorage } from '../../utils/getCurrencyLocalStorage';

const localItemsCurrency = getCurrencyLocalStorage();

const initialState = {
  itemsCurrency: localItemsCurrency,
};

const cartCurrencySlice = createSlice({
  name: 'cartCurrency',
  initialState,
  reducers: {
    addItem(state, action) {
      state.itemsCurrency.push(action.payload);
    },
    removeItem(state, action) {
      state.itemsCurrency = state.itemsCurrency.filter((item) => item !== action.payload);
    },
  },
});

export const selectCartCurrency = (state) => state.cartCurrency;
export const selectCartCurrencyByName = (name) => (state) =>
  state.cartCurrency.itemsCurrency.find((obj) => obj === name);

export const { addItem, removeItem } = cartCurrencySlice.actions;

export default cartCurrencySlice.reducer;
