import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorites(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
  },
});

export const { addFavorites } = cartSlice.actions;
export default cartSlice.reducer;
