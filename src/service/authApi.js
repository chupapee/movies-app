import axios, { AxiosError } from 'axios';

const API_KEY = import.meta.env.EMAIL_API_KEY;
const expiredKeyCode = 401;

export const authApi = {
	async checkEmail(email) {
		try {
			const res = await axios.get(
				`https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${email}`
			);
			return res.data.deliverability === 'DELIVERABLE';
		} catch (error) {
			if (
				error instanceof AxiosError &&
				error.response.status === expiredKeyCode
			) {
				return true;
			}
			return false;
		}
	},
};
