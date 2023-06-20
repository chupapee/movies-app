import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MovieSlider, fetchMovies } from '@entities/movie';
import { SearchMovie } from '@features/movie/search-movie';
import { Preloader } from '@shared/ui';
import s from './styles.module.css';

const DEFAULT_TITLE = 'game';

export function Movies() {
	const dispatch = useDispatch();

	const error = useSelector((state) => state.movie.error);
	const isLoading = useSelector((state) => state.movie.isLoading);
	const movies = useSelector((state) => state.movie.list);

	useEffect(() => {
		if (!movies.length) dispatch(fetchMovies({ title: DEFAULT_TITLE }));
	}, []);

	if (error) return <p className={s.error}>{error}</p>;

	return (
		<div className={s.container}>
			<div className={s.searchWrap}>
				<SearchMovie disabled={isLoading} />
			</div>
			{isLoading ? <Preloader /> : <MovieSlider movies={movies} />}
		</div>
	);
}
