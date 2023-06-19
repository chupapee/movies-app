import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Preloader } from '@shared/ui';

import s from './movie-slider.module.css';
import { MovieCol } from '../movie-col/index';
import { sliderOptions } from './helpers';

export const MovieSlider = ({ movies, isLoading }) => {
	return (
		<div className={s.container}>
			<Swiper {...sliderOptions} className={s.wrapper}>
				{isLoading ? (
					<Preloader />
				) : (
					movies.map((movie) => (
						<SwiperSlide key={movie.imdbID}>
							<MovieCol movie={movie} />
						</SwiperSlide>
					))
				)}
			</Swiper>
		</div>
	);
};
