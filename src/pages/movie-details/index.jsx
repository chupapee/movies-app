import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchDetails, MovieCard } from '@entities/movie';
import { Preloader } from '@shared/ui';

export function MovieDetails() {
	const dispatch = useDispatch();

	const movie = useSelector((state) => state.movie.movieDetails);
	const isLoading = useSelector((state) => state.movie.isLoading);

	const { movieId } = useParams();

	useEffect(() => {
		dispatch(fetchDetails({ id: movieId }));
	}, []);

	if (isLoading) return <Preloader />;

	return <MovieCard movie={movie} />;
}
