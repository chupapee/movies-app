import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { omdbApi } from '@shared/api';

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

export const fetchMovies = createAsyncThunk(
	'movies/fetchMovies',
	async ({ title = '', page = 1 }, { rejectWithValue }) => {
		try {
			const res = await omdbApi.findMovies({ title, page });
			if (res.data.Response === 'True') {
				const secondRes = await omdbApi.findMovies({
					title,
					page: 2,
				});
				if (secondRes.data.Response === 'True')
					return [...res.data.Search, ...secondRes.data.Search];
			}
			throw res.data.Error;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const fetchDetails = createAsyncThunk(
	'movies/fetchDetails',
	async ({ id }) => {
		const res = await omdbApi.fetchDetails({ id });
		return res.data;
	}
);
