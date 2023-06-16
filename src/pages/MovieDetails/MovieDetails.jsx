import { BackBtn } from '@shared/buttons/components/BackBtn';
import { Description } from '@widgets/MovieDetails/Description/index';
import { Poster } from '@widgets/MovieDetails/Poster/index';
import { Preloader } from '@widgets/Preloader/Preloader';
import { useSelector } from 'react-redux';

import s from './movieDetails.module.css';

export function MovieDetails() {
	// whole movie info
	const data = useSelector((state) => state.movies.movieDetails);
	const isLoading = useSelector((state) => state.movies.isLoading);

	return (
		<>
			<BackBtn />
			{isLoading ? (
				<Preloader />
			) : (
				<>
					<div className={s.mainInfo}>
						{data.Poster && <Poster posterPic={data.Poster} />}
						<Description {...data} />
					</div>
				</>
			)}
		</>
	);
}
