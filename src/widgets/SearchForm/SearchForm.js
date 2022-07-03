import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    setMovie(localStorage.getItem('lastSearch') || 'man')
  }, [])

  const findMovie = (e) => {
    localStorage.setItem('lastSearch', movieTitle)
    e.preventDefault()
    !isEmpty && setMovie(localStorage.getItem('lastSearch'))
  }

  const [searchDirty, setSearchDirty] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)

  const blurHandler = () => {
    setSearchDirty(true)
    movieTitle.length < 1 && setIsEmpty(true)
  }

  return (
    <form onSubmit={findMovie} className='searchForm'>
      <input
        type="text"
        className='searchInput'
        onChange={ e => setMovieTitle(e.target.value) } 
        value={movieTitle}
        placeholder={searchDirty ? 'Please, type something...' : 'Search for a movie..'}
        onBlur={blurHandler}
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
