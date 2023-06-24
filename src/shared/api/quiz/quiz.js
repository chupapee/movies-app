import { apiInstance } from './base';

const NUMBER_OF_QUESTIONS = 25;
const FILMS_CATEGORY_ID = 11;
const SELECT_TYPE = 'multiple'; // 'multiple' | 'boolean'

export const fetchQuizList = () => {
	return apiInstance.get(
		`/api.php?amount=${NUMBER_OF_QUESTIONS}&category=${FILMS_CATEGORY_ID}&type=${SELECT_TYPE}`
	);
};
