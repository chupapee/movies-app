import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { fetchInfo } from '../../redux/slices.js/moviesSlice';
import './movieInfo.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export function MovieInfo({info}) {
  
  const dispatch = useDispatch()

  function chooseMovie(title){
    dispatch(fetchInfo(title))
  }
  const link = `/${info.imdbID}`

  return (
      <div className='movieWrapper'>
        <NavLink to={link} onClick={() => chooseMovie(info.Title)} className='movieLinkWrap'>
          <div className='moviePosterWrapper'>
            <img className='moviePoster' src={info.Poster}alt='poster' />
            <div className='movieTitle'>{info.Title}</div>
            <div className='movieOverlay' />
          </div>
        </NavLink>
          <div className='moviesIconsWrap'>
            <div className='movieCalendar'>
            <CalendarMonthIcon/>
            <span className='movieYear'>{info.Year}</span>
            </div>
            <div className='movieLikeWrap'>
              <FavoriteIcon className='movieLike' />
            </div>
          </div>
    </div>
  )
}
