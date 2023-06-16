import { MovieSlider } from '../../widgets/Movies/movieSlider';
import s from './movies.module.css';

export function Movies() {
	return (
		<>
			<div className={s.movieListWrap}>
				<MovieSlider />
			</div>
		</>
	);
}
