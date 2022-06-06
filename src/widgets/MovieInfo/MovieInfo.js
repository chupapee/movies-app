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

  return (
      <div className='movieWrapper'>
        <NavLink to='/movieDetails' onClick={() => chooseMovie(info.Title)} className='linkWrap'>
          <div className='posterWrapper'>
            <img className='moviePoster' src={info.Poster} />
            <div className='movieOverlay' />
          </div>
        </NavLink>
        <div className='movieDesctiption' onClick={e => {e.stopImmediatePropagation()}}>
          <span className='movieTitle'>{info.Title}</span>
          <div className='movieIconWrap'>
            <FavoriteIcon className='movieIcon' />
          </div>
          <CalendarMonthIcon className='movieCalendar'/>
          <span className='movieYear'>{info.Year}</span>
        </div>
    </div>
  )
}
