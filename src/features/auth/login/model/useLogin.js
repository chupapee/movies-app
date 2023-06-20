import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { checkEmail } from '@entities/session';

const emailRegex = (email = '') => /^\S+@\S+\.\S+$/.test(email);

export const useLogin = () => {
	const dispatch = useDispatch();

	const [emailError, setEmailError] = useState(false);

	const onSubmit = (fields) => {
		if (!emailRegex(fields.email)) {
			setEmailError(true);
			return;
		}
		dispatch(checkEmail(fields));
	};

	const onFormChange = () => setEmailError(false);

	return { onSubmit, onFormChange, emailError };
};
