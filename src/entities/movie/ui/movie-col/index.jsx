import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { NavLink } from 'react-router-dom';

import s from './movie-card.module.css';

export const MovieCol = ({ movie, className }) => {
	const { Poster, Title, Year, imdbID } = movie;

	return (
		<NavLink
			className={`${s.wrapper} ${className}`}
			to={`/details/${imdbID}`}
		>
			<div className={s.posterWrapper}>
				<img className={s.poster} src={Poster} alt="poster" />
			</div>
			<div className={s.info}>
				<p>{Title}</p>
				<div>
					<CalendarMonthIcon fontSize="small" />
					<span>{Year}</span>
				</div>
			</div>
		</NavLink>
	);
};
