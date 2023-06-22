import { movieModel } from '@entities/movie';
import { quizModel } from '@entities/quiz';
import { sessionModel } from '@entities/session';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		[movieModel.movieSlice.name]: movieModel.movieSlice.reducer,
		[quizModel.quizSlice.name]: quizModel.quizSlice.reducer,
		[sessionModel.sessionModel.name]: sessionModel.sessionModel.reducer,
	},
});
