import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../../redux/slices.js/moviesSlice'
import './searchForm.css'
import SearchIcon from '@mui/icons-material/Search';

export function SearchForm() {
  const [movieTitle, setMovieTitle] = useState('')
  
  const dispatch = useDispatch()

  // fetching data
  const setMovie = (movieTitle) => {
    dispatch(fetchMovies(movieTitle))
  }

  // movies default value
  useEffect( () => {
    setMovie('man')
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
      <button className='searchBtn'>
      <div className='searchIconWrap'>
        <SearchIcon className='searchIcon'/>
      </div>
      </button>
    </form>
  )
}
