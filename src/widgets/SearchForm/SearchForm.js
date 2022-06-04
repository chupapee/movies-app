import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../../redux/slices.js/moviesSlice'
import './searchForm.css'

export function SearchForm() {
  const [movieTitle, setMovieTitle] = useState('')
  
  const dispatch = useDispatch()

  // function of fetching data
  const setMovie = (movieTitle) => {
    dispatch(fetchMovies(movieTitle))
  }

  // fetch data on the first render
  useEffect( () => {
    setMovie('Avengers')
  }, [])
  

  const findMovie = (e) => {
    e.preventDefault()
    setMovie(movieTitle)
  }

  return (
    <form onSubmit={findMovie} className='searchForm'>
      <input
        type="text"
        className='searchInput' 
        onChange={ e => setMovieTitle(e.target.value) } 
        value={movieTitle}
        placeholder='Search for a movie..'
      >
      </input>
      <button className='searchIcon' />
    </form>
  )
}
