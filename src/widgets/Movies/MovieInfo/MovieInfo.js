import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { fetchInfo } from '../../../redux/slices.js/moviesSlice';
import s from './movieInfo.module.css'

export function MovieInfo({info}) {
  
  const dispatch = useDispatch()

  function chooseMovie(title){
    dispatch(fetchInfo(title))
  }
  const link = `/${info.imdbID}`

  return (
      <div className={s.movieWrapper}>
        <NavLink to={link} onClick={() => chooseMovie(info.Title)} className={s.movieLinkWrap}>
          <div className={s.moviePosterWrapper}>
            <img className={s.moviePoster} src={info.Poster} alt='poster' />
            <div className={s.movieTitle}>{info.Title}</div>
            <div className={s.movieOverlay} />
          </div>
        </NavLink>
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
