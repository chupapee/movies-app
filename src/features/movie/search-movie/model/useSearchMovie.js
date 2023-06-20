import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchMovies } from '@entities/movie';

export const useSearchMovie = () => {
	const [title, setTitle] = useState('');
	const dispatch = useDispatch();

	const onChange = (value) => setTitle(value);

	const search = () => {
		dispatch(fetchMovies({ title }));
	};
	return { title, onChange, search };
};
