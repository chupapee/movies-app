import { apiInstance } from './base';

export const validateEmail = (email) => {
	return apiInstance.get(`/email=${email}`);
};
