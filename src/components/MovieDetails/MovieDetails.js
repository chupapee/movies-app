import React from 'react'
import './movieDetails.css'

export function MovieDetails({info}) {
  return (
    <div className='movieWrapper'>
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
    </div>
  )
}
