import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './movies.css'
import SearchForm from '../searchForm/SearchForm';
import { addMovies, setPages, setCurrentPage } from '../../redux/slices.js/moviesSlice';
import { MovieDetails } from '../MovieDetails/MovieDetails'
import { fetchMovies } from '../../redux/slices.js/moviesSlice';

export default function Movies() {

  const dispatch = useDispatch()
  let movies = useSelector(state => state.movies.movies)
  const currentPage = useSelector(state => state.movies.currentPage)
  const pages = useSelector(state => state.movies.pages)

  const findMovie = (movieTitle) => {
    dispatch(fetchMovies(movieTitle, refreshData))
  }

  const refreshData = () => {
    setMoviesCopy(getArrayByIndex([...movies], currentPage))
  }

  const getArrayByIndex = (arr, index) => arr.splice((index - 1) * 3, 3)

  const [moviesCopy, setMoviesCopy] = useState(null)

  useEffect(() => {
    refreshData()
  }, [movies, currentPage])

  useEffect( () => {
    findMovie('Avengers')
  }, [])

  return (
    <div className='wrapper'>
      {console.log(moviesCopy)}
      <div className='logo'><a>IMDB</a>
      <SearchForm findMovie={findMovie}/>
      </div>
      <div className='content'>
        <div className='contentWrapper'>
        {moviesCopy ? moviesCopy.map((movie, index) => (
          <MovieDetails info={movie}>{movies[index].Title}</MovieDetails>
        )) : <div></div>}
        </div>
        <div width={'100%'} height={'100%'}>
          {pages.map((page) => (
            <span onClick={() => {dispatch(setCurrentPage(page))}} style={{backgroundColor:'white'}}>{page}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
