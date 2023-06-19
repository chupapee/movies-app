import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { emailApi } from '@shared/api';

const initialState = {
	login: localStorage.getItem('login'),
	email: localStorage.getItem('email'),
	img:
		localStorage.getItem('icon') ||
		'https://c.tenor.com/SLT0MF-wqRgAAAAC/laughing-leonardo-dicaprio.gif',
	isValid: true,
	checking: false,
	checked: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setLogin: (state, { payload }) => {
			const login = payload.length > 0 ? payload : state.login;
			state.login = login;
			localStorage.setItem('login', login);
		},
		setImg: (state, action) => {
			state.img = action.payload;
			localStorage.setItem('icon', action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(checkEmail.pending, (state) => {
				state.checking = true;
			})
			.addCase(checkEmail.fulfilled, (state, { payload }) => {
				state.isValid = true;
				[state.email, state.login] = payload;
				state.checked = true;
				state.checking = false;
			})
			.addCase(checkEmail.rejected, (state) => {
				state.isValid = false;
				state.checking = false;
			});
	},
});

export const { setLogin, setImg } = authSlice.actions;

export const checkEmail = createAsyncThunk(
	'email/checkEmail',
	async (data, { rejectWithValue }) => {
		const [email, login] = data;
		try {
			const res = await emailApi.validateEmail(email);
			console.log(res);
			// const expiredKeyCode = 401;
			if (res.data.deliverability === 'DELIVERABLE') {
				localStorage.setItem('email', email);
				localStorage.setItem('login', login);
				return [email, login];
			}
			throw new Error('invalid email');
		} catch (error) {
			console.log(error, 'error');
			return rejectWithValue(error);
		}
	}
);
