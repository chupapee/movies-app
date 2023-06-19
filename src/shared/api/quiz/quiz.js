import { apiInstance } from './base';

export const fetchQuizList = () => {
	return apiInstance.get('/api.php?amount=50&category=11&type=multiple');
};
