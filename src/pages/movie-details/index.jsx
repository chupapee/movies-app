import { GoBackButton } from '@shared/ui';
import { Preloader } from '@shared/ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from 'src/entities/movie';
import { MovieCard } from 'src/entities/movie/ui';

export function MovieDetails() {
	const dispatch = useDispatch();

	const movie = useSelector((state) => state.movie.movieDetails);
	const isLoading = useSelector((state) => state.movie.isLoading);

	const { movieId } = useParams();

	useEffect(() => {
		dispatch(fetchDetails({ id: movieId }));
	}, []);

	return (
		<>
			<GoBackButton />
			{!movie && isLoading ? <Preloader /> : <MovieCard movie={movie} />}
		</>
	);
}
