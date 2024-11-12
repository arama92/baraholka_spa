import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const featchCurrencyJs = createAsyncThunk('currency/CurrencysJs', async () => {
  const { data } = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
  return data.Valute;
});

const initialState = {
  itemsJs: [],
  status: 'loading', // loading , success, error
};

const CurrencyJsSlice = createSlice({
  name: 'currencyJs',
  initialState,
  reducers: {
    setItems(state, action) {
      state.itemsJs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(featchCurrencyJs.pending, (state, action) => {
      state.itemsJs = [];
      state.status = 'loading';
    });
    builder.addCase(featchCurrencyJs.fulfilled, (state, action) => {
      state.itemsJs = action.payload;
      state.status = 'success';
    });
    builder.addCase(featchCurrencyJs.rejected, (state, action) => {
      state.itemsJs = [];
      state.status = 'error';
    });
  },
});

export const selectCurrencyJs = (state) => state.currencyJs;
export const { setItems } = CurrencyJsSlice.actions;

export default CurrencyJsSlice.reducer;
