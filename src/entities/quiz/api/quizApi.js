import { createAsyncThunk } from '@reduxjs/toolkit';
import { quizApi } from '@shared/api';

export const fetchQuiz = createAsyncThunk(
	'quiz/fetchQuiz',
	async (_, { rejectWithValue }) => {
		try {
			const res = await quizApi.fetchQuizList();
			const questions = res.data.results;
			const result = questions?.map(
				({
					// category,
					// difficulty,
					correct_answer,
					incorrect_answers,
					question,
				}) => ({
					question,
					answer: correct_answer,
					options: [...incorrect_answers, correct_answer].sort(), // sort to shuffle options
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
