import React from "react";
import s from "./movies.module.css";
import { MovieSlider } from "../../widgets/Movies/movieSlider";

export function Movies() {
  return (
    <>
      <div className={s.movieListWrap}>
        <MovieSlider />
      </div>
    </>
  );
}
