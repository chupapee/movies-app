import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { quizApi } from '@shared/api';

const initialState = {
	quizList: [],
	currentQuiz: {},
	isLoading: false,
	isError: false,
	totalGuessed: 0,
};

export const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		nextQuiz: (state, { payload }) => {
			state.currentQuiz = state.quizList[payload];
		},
		setTotalGuessed: (state, action) => {
			state.totalGuessed = action.payload;
			localStorage.setItem('totalGuessed', action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getQuizList.pending, (state) => {
				state.quizList = [];
				state.isLoading = true;
			})
			.addCase(getQuizList.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.quizList = payload;
				state.currentQuiz = payload[0];
			})
			.addCase(getQuizList.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
	},
});

export const { nextQuiz, setTotalGuessed } = quizSlice.actions;

export const getQuizList = createAsyncThunk(
	'quiz/getQuizList',
	async (_, { rejectWithValue }) => {
		try {
			const res = await quizApi.fetchQuizList();
			const questions = res.data.results;
			const result = questions?.map(
				({
					category,
					correct_answer,
					difficulty,
					incorrect_answers,
					question,
				}) => ({
					question,
					answer: correct_answer,
					options: [...incorrect_answers, correct_answer],
				})
			);
			if (result) {
				return result;
			}
			throw new Error('fetch error');
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
