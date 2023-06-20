import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from '@entities/movie';
import { sessionModel } from '@entities/session';

import { quizSlice } from './slices.js/quizSlice';

export const store = configureStore({
	reducer: {
		[sessionModel.name]: sessionModel.reducer,
		[movieSlice.name]: movieSlice.reducer,
		[quizSlice.name]: quizSlice.reducer,
	},
});
