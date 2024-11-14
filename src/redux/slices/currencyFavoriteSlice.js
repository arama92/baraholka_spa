import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorite: false,
};

const currencyFavoriteSlice = createSlice({
  name: 'currencyFavorite',
  initialState,
  reducers: {
    setFavorite(state, action) {
      console.log(action.payload);
      state.favorite = action.payload;
    },
  },
});

export const { setFavorite } = currencyFavoriteSlice.actions;

export default currencyFavoriteSlice.reducer;
