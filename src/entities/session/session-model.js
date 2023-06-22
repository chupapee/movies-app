import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const DEFAULT_AVATAR =
	'https://c.tenor.com/SLT0MF-wqRgAAAAC/laughing-leonardo-dicaprio.gif';

const initialState = {
	username: '',
	email: '',
	avatar: DEFAULT_AVATAR,

	isAuthorized: false,
	loading: false,
};

export const sessionModel = createSlice({
	name: 'session',
	initialState,
	reducers: {
		login: (state, { payload }) => {
			for (const key in payload) {
				state[key] = payload[key];
			}
		},
		update: (state, { payload }) => {
			for (const key in payload) {
				state[key] = payload[key];
			}
		},
		reset: (state) => {
			state.username = '';
			state.email = '';
			state.avatar = DEFAULT_AVATAR;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(checkEmail.pending, (state) => {
				state.loading = true;
			})
			.addCase(checkEmail.fulfilled, (state, { payload }) => {
				state.isAuthorized = true;
				state.loading = false;

				for (const key in payload) {
					state[key] = payload[key];
				}
			})
			.addCase(checkEmail.rejected, (state) => {
				state.isAuthorized = false;
				state.loading = false;
			});
	},
});

export const { login, update, reset } = sessionModel.actions;

export const checkEmail = createAsyncThunk(
	'email/checkEmail',
	async ({ username, email, password }) => {
		await new Promise((ok) => setTimeout(ok, 1000));
		return { username, email, password };
		// try {
		// const res = await emailApi.validateEmail(email);
		// const expiredKeyCode = 401;
		// if (res.data.deliverability === 'DELIVERABLE') {
		// localStorage.setItem('email', email);
		// localStorage.setItem('username', login);
		// }
		// throw new Error('invalid email');
		// } catch (error) {
		// return rejectWithValue(error);
		// }
	}
);
