import axios from 'axios';

import { QUIZ_API_URL } from '../../config';

export const apiInstance = axios.create({
	baseURL: QUIZ_API_URL,
});
