import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./slices.js/moviesSlice";
import { authSlice } from "./slices.js/authSlice";
import { quizSlice } from "./slices.js/quizSlice";

const moviesReducer = movieSlice.reducer
const authReducer = authSlice.reducer
const quizReducer = quizSlice.reducer

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer,
    quiz: quizReducer
  }
})