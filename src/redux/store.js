import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./slices.js/moviesSlice";
import { authSlice } from "./slices.js/authSlice";

const moviesReducer = movieSlice.reducer
const authReducer = authSlice.reducer

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer
  },

})