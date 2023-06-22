import { Swiper, SwiperSlide } from 'swiper/react';

import { MovieCol } from '../movie-col/index';
import { sliderOptions } from './helpers';
import s from './movie-slider.module.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const MovieSlider = ({ movies }) => {
	return (
		<div className={s.container}>
			<Swiper {...sliderOptions} className={s.wrapper}>
				{movies.map((movie) => (
					<SwiperSlide key={movie.imdbID}>
						<MovieCol movie={movie} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
