import React, { useState } from 'react'
import './searchForm.css'

export default function SearchForm( { findMovie } ) {
  
  const [movieTitle, setMovieTitle] = useState('')

  const handlerOnClick = (e) => {
    e.preventDefault()
    findMovie(movieTitle)
  }

  return (
    <form onSubmit={handlerOnClick} className='searchForm'>
      <input
        type="text" 
        className='searchInput' 
        onChange={ e => setMovieTitle(e.target.value) } 
        value={movieTitle}
        placeholder='Search for a movie..'
      >
      </input>
      <button className='searchIcon' />
      {/* <button onClick={() => } className='searchBtn'>Search</button> */}
    </form>
  )
}
