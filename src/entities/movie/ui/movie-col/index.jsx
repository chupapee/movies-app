import { NavLink } from 'react-router-dom';

import s from './movie-card.module.css';

export const MovieCol = ({ movie, className }) => {
	const { Poster, Title, Year, imdbID } = movie;

	return (
		<NavLink
			className={`${s.wrapper} ${className}`}
			to={`/movies/${imdbID}`}
		>
			<div className={s.posterWrapper}>
				<img className={s.poster} src={Poster} alt="poster" />
			</div>
			<div className={s.info}>
				<p>{Title}</p>
				<div>
					<img
						src="assets/calendar-icon.svg"
						width={18}
						height={18}
						alt="movie release date"
					/>
					<span>{Year}</span>
				</div>
			</div>
		</NavLink>
	);
};
