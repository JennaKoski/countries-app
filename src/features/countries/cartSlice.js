import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: JSON.parse(localStorage.getItem("favs")) || [],
  },
  reducers: {
    addFavorites(state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.name.common !== action.payload.name.common
      );
    },
  },
});

export const saveToLocalStorage = (data) => {
  localStorage.setItem("favs", JSON.stringify(data));
};

export const { addFavorites, removeFavorites } = cartSlice.actions;
export default cartSlice.reducer;
