import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Movie, movieApi } from '@entities/movie';
import { Preloader } from '@shared/ui';

const MovieDetails = () => {
	const dispatch = useDispatch();

	const movie = useSelector((state) => state.movie.movieDetails);
	const isLoading = useSelector((state) => state.movie.isLoading);

	const { movieId } = useParams();

	useEffect(() => {
		dispatch(movieApi.fetchDetails({ id: movieId }));
	}, []);

	if (isLoading) return <Preloader />;

	return <Movie.MovieCard movie={movie} />;
};

export default MovieDetails;
