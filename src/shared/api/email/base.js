import axios from 'axios';

import { EMAIL_API_KEY, EMAIL_API_URL } from '../../config';

export const apiInstance = axios.create({
	baseURL: EMAIL_API_URL,
	params: {
		api_key: EMAIL_API_KEY,
	},
});
