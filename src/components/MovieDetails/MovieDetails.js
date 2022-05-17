import React from 'react'
import './movieDetails.css'

export function MovieDetails({info}) {
console.log(info);
  return (
    <div className='movieWrapper'>
      <div className='moviePosterWrapper'>
        <img className='moviePoster' src={info.Poster} />
        <span className='movieTitle'>{info.Title}</span>
        <span className='movieYear'>{info.Year}</span>
      </div>
    </div>
  )
}
