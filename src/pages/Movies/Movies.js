import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MovieInfo } from "../../widgets/MovieInfo/MovieInfo";
import { Preloader } from "../../widgets/Preloader/Preloader";
import "./movies.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import swiper module
import { Pagination, Navigation } from "swiper";

export function Movies() {
  let movies = useSelector((state) => state.movies.movies);
  const isLoading = useSelector((state) => state.movies.isLoading);

  return (
    <>
      <div className="swiperWrap">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
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
