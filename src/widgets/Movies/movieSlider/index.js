import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import swiper module
import { Pagination, Autoplay, Mousewheel } from "swiper";
import { Preloader } from "../../Preloader/Preloader";
import { MovieInfo } from "../MovieInfo/MovieInfo";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";
import { fetchInfo } from "../../../redux/slices.js/moviesSlice";
import { CONTENT_DETAILS_ROUTE } from "../../../app/routing/utils/consts";

export const MovieSlider = () => {
  const isLoading = useSelector((state) => state.movies.isLoading);
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  const getDirection = () => {
    let windowWidth = window.innerWidth;
    let direction = windowWidth <= 500 ? "vertical" : "horizontal";
    return direction;
  };
  const handleResize = (Swiper) => {
    Swiper.changeDirection(getDirection());
  };
  function chooseMovie(title){
    dispatch(fetchInfo(title))
  }

  return (
    <>
      <Swiper
        mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
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
        modules={[Pagination, Autoplay, Mousewheel]}
        onResize={(Swiper) => handleResize(Swiper)}
        className={s.movieList}
      >
        {isLoading ? (
          <Preloader />
        ) : (
          movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <NavLink to={CONTENT_DETAILS_ROUTE} onClick={() => chooseMovie(movie.Title)}>
                <MovieInfo key={index} info={movie}>
                  {movies[index].Title}
                </MovieInfo>
              </NavLink>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};
