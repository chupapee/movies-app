import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import swiper module
import { Pagination, Autoplay } from "swiper";
import { Preloader } from "../../Preloader/Preloader";
import { MovieInfo } from "../MovieInfo/MovieInfo";
import s from './style.module.css'

export const MovieSlider = () => {
  const isLoading = useSelector((state) => state.movies.isLoading);
  const movies = useSelector((state) => state.movies.movies);

  const getDirection = () => {
    let windowWidth = window.innerWidth;
    let direction = windowWidth <= 500 ? "vertical" : "horizontal";
    return direction;
  };
  const handleResize = (Swiper) => {
    Swiper.changeDirection(getDirection());
  };

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerGroup={2}
        breakpoints={{
          850: {
            slidesPerView: 4,
          },
          650: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          500: {
            slidesPerGroup: 1,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          0: {
            slidesPerGroup: 1,
            allowTouchMove: true,
            mousewheel: true,
            slidesPerView: 1,
            pagination: {
              modifierClass: true,
            },
          },
        }}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        onResize={(Swiper) => handleResize(Swiper)}
        className={s.movieList}
      >
        {isLoading ? (
          <Preloader />
        ) : (
          movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <MovieInfo key={index} info={movie}>
                {movies[index].Title}
              </MovieInfo>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};
