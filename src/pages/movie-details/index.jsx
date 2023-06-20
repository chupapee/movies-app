import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Preloader } from '@shared/ui';
import { fetchDetails } from '@entities/movie/model';
import { MovieCard } from '@entities/movie';

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
