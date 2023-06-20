import { createSlice } from '@reduxjs/toolkit';
import { fetchDetails, fetchMovies } from '../api/movieApi';

const initialState = {
	list: [],
	selectedMovie: null,
	isLoading: false,
	error: null,
};

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// movie list
			.addCase(fetchMovies.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchMovies.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.list = payload;
			})
			.addCase(fetchMovies.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})

			// selected movie
			.addCase(fetchDetails.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchDetails.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.movieDetails = payload;
			})
			.addCase(fetchDetails.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});
