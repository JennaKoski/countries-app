import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/countriesSlice";
import favoritesReducer from "../features/countries/cartSlice";

export default configureStore({
  reducer: {
    countries: countriesReducer,
    favorites: favoritesReducer,
  },
});
