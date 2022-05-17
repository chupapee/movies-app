import React, { useState } from 'react'

export default function SearchForm( { findMovie } ) {
  
  const [movieTitle, setMovieTitle] = useState('')

  return (
    <>
      <input 
        type="text" 
        className='searchInput' 
        onChange={ e => setMovieTitle(e.target.value) } 
        value={movieTitle}
        placeholder='Search for a movie..'
      />
      <button onClick={() => findMovie(movieTitle)} className='searchBtn'>Search</button>
    </>
  )
}
