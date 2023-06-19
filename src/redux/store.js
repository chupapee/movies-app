import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from 'src/entities/movie';

import { authSlice } from './slices.js/authSlice';
import { quizSlice } from './slices.js/quizSlice';

export const store = configureStore({
	reducer: {
		[movieSlice.name]: movieSlice.reducer,
		[authSlice.name]: authSlice.reducer,
		[quizSlice.name]: quizSlice.reducer,
	},
});
