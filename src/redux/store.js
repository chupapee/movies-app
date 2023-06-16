import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices.js/authSlice';
import { movieSlice } from './slices.js/moviesSlice';
import { quizSlice } from './slices.js/quizSlice';

const moviesReducer = movieSlice.reducer;
const authReducer = authSlice.reducer;
const quizReducer = quizSlice.reducer;

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
		auth: authReducer,
		quiz: quizReducer,
	},
});
