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
    console.log('search');
    dispatch(fetchMovies(movieTitle))
  }

  // movies default value
  useEffect( () => {
    setMovie(localStorage.getItem('lastSearch') || 'game')
  }, [])

  const findMovie = (e) => {
    localStorage.setItem('lastSearch', movieTitle)
    localStorage.setItem('currentPage', 1)
    e.preventDefault()
    setMovie(localStorage.getItem('lastSearch'))
    setMovieTitle('')
    e.target.blur()
  }

  return (
    <form onSubmit={findMovie} className='searchForm'>
      <input
        type="text"
        className='searchInput'
        onChange={ e => setMovieTitle(e.target.value)}
        value={movieTitle}
        placeholder='Search for a movie...'
        minLength='1'
        required
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
