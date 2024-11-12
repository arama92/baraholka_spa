import { configureStore } from '@reduxjs/toolkit';
import currencyJs from './slices/CurrencyJsSlice';
import cartCurrency from './slices/cartCurrencySlice';

export const store = configureStore({
  reducer: {
    currencyJs,
    cartCurrency,
  },
});
