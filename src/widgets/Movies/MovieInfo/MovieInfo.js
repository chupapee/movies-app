import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import s from './movieInfo.module.css'

export function MovieInfo({info}) {
  return (
      <div className={s.movieWrapper}>
          <div className={s.moviePosterWrapper}>
            <img className={s.moviePoster} src={info.Poster} alt='poster' />
            <div className={s.movieTitle}>{info.Title}</div>
            <div className={s.movieOverlay} />
          </div>
          <div className={s.moviesIconsWrap}>
            <div className={s.movieCalendar}>
            <CalendarMonthIcon/>
            <span className={s.movieYear}>{info.Year}</span>
            </div>
            <div className={s.movieLikeWrap}>
              <FavoriteIcon className={s.movieLike} />
            </div>
          </div>
    </div>
  )
}
