import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchMovies } from '../../redux/slices.js/moviesSlice';
import s from './searchForm.module.css';

export function SearchForm() {
	const [movieTitle, setMovieTitle] = useState('');

	const dispatch = useDispatch();

	// fetching data
	const setMovie = (movieTitle) => {
		dispatch(fetchMovies(movieTitle));
	};

	// movies default value
	useEffect(() => {
		setMovie(localStorage.getItem('lastSearch') || 'game');
	}, []);

	const findMovie = (e) => {
		localStorage.setItem('lastSearch', movieTitle);
		if (e) e.preventDefault();
		setMovie(localStorage.getItem('lastSearch'));
		setMovieTitle('');
		if (e) e.target.blur();
	};

	return (
		<div className={s.searchFormWrap}>
			<form onSubmit={findMovie}>
				<input
					type="text"
					className={s.searchInput}
					onChange={(e) => setMovieTitle(e.target.value)}
					value={movieTitle}
					placeholder="Search for a movie..."
					minLength="1"
					required
				/>
				<button className={s.searchBtn}>
					<div className={s.searchIconWrap}>
						<SearchIcon className={s.searchIcon} />
					</div>
				</button>
			</form>
		</div>
	);
}
