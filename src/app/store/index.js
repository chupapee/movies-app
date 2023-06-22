import { movieSlice } from '@entities/movie';
import { quizSlice } from '@entities/quiz';
import { sessionModel } from '@entities/session';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		[sessionModel.name]: sessionModel.reducer,
		[movieSlice.name]: movieSlice.reducer,
		[quizSlice.name]: quizSlice.reducer,
	},
});
