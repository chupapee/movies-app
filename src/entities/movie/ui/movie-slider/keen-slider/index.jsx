import { Preloader } from '@shared/ui';
import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';
import { MovieCol } from '../movie-col/index';
import { sliderOptions } from './helpers';

import s from './movie-slider.module.css';

const MovieSlider = ({ movies, isLoading }) => {
	const [sliderRef] = useKeenSlider(sliderOptions);

	return (
		<div ref={sliderRef} className={`${s.wrapper} keen-slider`}>
			{isLoading ? (
				<Preloader />
			) : (
				movies?.map((movie) => (
					<MovieCol
						key={movie.imdbID}
						movie={movie}
						className="keen-slider__slide"
					/>
				))
			)}
		</div>
	);
};
