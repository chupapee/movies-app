import { apiInstance } from './base';

export const findMovies = ({ title, page }) => {
	return apiInstance.get(`/?s=${title}&page=${page}`);
};

export const fetchDetails = ({ id }) => {
	return apiInstance.get(`/?i=${id}&plot=full`);
};
