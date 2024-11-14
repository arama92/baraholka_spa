import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: false,
};

const currencyFavoriteSlice = createSlice({
  name: 'currencyFavorite',
  initialState,
  reducers: {
    setFavorite(state, action) {
      state.favorite = action.payload;
    },
  },
});

export const { setFavorite } = currencyFavoriteSlice.actions;

export default currencyFavoriteSlice.reducer;
