import { createSlice } from '@reduxjs/toolkit';

import { fetchQuiz } from '../api/quizApi';

const initialState = {
	list: [],
	isLoading: false,
	isError: false,

	totalGuessed: 0,
};

export const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchQuiz.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchQuiz.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.list = payload;
			})
			.addCase(fetchQuiz.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
	},
});
