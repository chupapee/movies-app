import React from "react";
import { useSelector } from "react-redux";
import { MovieInfo } from "../../widgets/MovieInfo/MovieInfo";
import { Preloader } from "../../widgets/Preloader/Preloader";
import "./movies.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import swiper module
import { Pagination, Autoplay } from "swiper";

export function Movies() {
  let movies = useSelector((state) => state.movies.movies);
  const isLoading = useSelector((state) => state.movies.isLoading);

  const getDirection = () => {
    let windowWidth = window.innerWidth;
    let direction = windowWidth <= 500 ? 'vertical' : 'horizontal';

    return direction;
  }
  const handleResize = (Swiper) => {
    Swiper.changeDirection(getDirection())
  }
  return (
    <>
      <div className="swiperWrap">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerGroup={2}
          breakpoints={{
            850: {
              slidesPerView: 4
            },
            650: {
              slidesPerView: 3,
              spaceBetween: 20
            },

            500: {
              slidesPerGroup: 1,
              slidesPerView: 2,
              spaceBetween: 10
            },
            0: {
              slidesPerGroup: 1,
              allowTouchMove: true,
              mousewheel: true,
              slidesPerView: 1,
              pagination: {
                modifierClass: true,
              }
            }
          }}
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          onResize={Swiper => handleResize(Swiper)}
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
      </div>
    </>
  );
}
