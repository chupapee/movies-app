import { createAsyncThunk } from '@reduxjs/toolkit';
import { omdbApi } from '@shared/api';

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
