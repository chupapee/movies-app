import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../redux/slices.js/moviesSlice'
import './searchForm.css'
import SearchIcon from '@mui/icons-material/Search';

export function SearchForm() {
  const [movieTitle, setMovieTitle] = useState('')
  const error = useSelector(state => state.movies.error)
  
  const dispatch = useDispatch()

  // fetching data
  const setMovie = (movieTitle) => {
    dispatch(fetchMovies(movieTitle))
  }

  // movies default value
  useEffect( () => {
    setMovie(sessionStorage.getItem('lastSearch') || 'man')
  }, [])

  const findMovie = (e) => {
    sessionStorage.setItem('lastSearch', movieTitle)
    e.preventDefault()
    !isEmpty && setMovie(sessionStorage.getItem('lastSearch'))
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
