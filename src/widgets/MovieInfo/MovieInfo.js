import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { setMovieDetails } from '../../redux/slices.js/moviesSlice';
import './movieInfo.css'

export function MovieInfo({info}) {
  
  const dispatch = useDispatch()

  function chooseMovie(){
    dispatch(setMovieDetails(info))
  }

  return (
    <NavLink to='/movieDetails' onClick={chooseMovie} className='movieWrapper'>
      <div className='moviePosterWrapper'>
        <div className='moviePosterWrapper'>
          <img className='moviePoster' src={info.Poster} />
          <div className='movieOverlay' />
        </div>
        <div className='movieDesctiption'>
          <span className='movieTitle'>{info.Title}</span>
          <span className='movieYear'>{info.Year}</span>
        </div>
      </div>
    </NavLink>
  )
}
