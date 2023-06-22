import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { movieApi } from '@entities/movie';

export const useSearchMovie = () => {
	const [title, setTitle] = useState('');
	const dispatch = useDispatch();

	const onChange = (value) => setTitle(value);

	const search = () => {
		dispatch(movieApi.fetchMovies({ title }));
	};
	return { title, onChange, search };
};
