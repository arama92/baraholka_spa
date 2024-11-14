import { configureStore } from '@reduxjs/toolkit';
import currencyJs from './slices/CurrencyJsSlice';
import cartCurrency from './slices/cartCurrencySlice';
import currencyFavorite from './slices/currencyFavoriteSlice';

export const store = configureStore({
  reducer: {
    currencyJs,
    cartCurrency,
    currencyFavorite,
  },
});
