import { useState } from "react";
import s from "./style.module.css";

export const Poster = ({ posterPic }) => {
  const [isClicked, setIsClicked] = useState(false);
  const getRickRoll = () => {
    setIsClicked(true);
  };

  return (
    <div onClick={getRickRoll} className={s.moviePosterWrap}>
      {isClicked ? (
        <div className={s.movieFrame}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&fs=0&controls=0&modestbranding=1&showinfo=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ) : (
        <>
        <img
          className={s.movieDetailsPoster}
          src={posterPic}
          alt="moviePoster"
        />
        <span className={s.moviePlay}></span>
        </>
      )}
    </div>
  );
};
