import { useSelector } from 'react-redux';
import { MovieSlider } from 'src/entities/movie';

export function Movies() {
	const isLoading = useSelector((state) => state.movie.isLoading);
	const movies = useSelector((state) => state.movie.list);

	return <MovieSlider isLoading={isLoading} movies={movies} />;
}
