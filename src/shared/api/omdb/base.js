import axios from 'axios';

import { OMDB_API_KEY, OMDB_API_URL } from '../../config';

export const apiInstance = axios.create({
	baseURL: OMDB_API_URL,
	params: {
		apikey: OMDB_API_KEY,
	},
});
