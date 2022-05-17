import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./slices.js/moviesSlice";

const moviesReducer = movieSlice.reducer

export const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
})