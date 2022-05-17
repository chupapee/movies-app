import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchApi } from '../../dal/searchMovieAPI'
import './movies.css'
import SearchForm from '../searchForm/SearchForm';
import { addMovies } from '../../redux/slices.js/moviesSlice';
import { MovieDetails } from '../MovieDetails/MovieDetails'

export default function Movies() {

  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies.movies)

  const findMovie = (movieTitle) => {
    searchApi.findMovie(movieTitle)
    .then(newMovies => dispatch(addMovies(newMovies)))
  }

  return (
    <div className='wrapper'>
      <div className='logo'><a>IMDB</a></div>
      <div className='searchForm'>
        <SearchForm findMovie={findMovie}/>
      </div>
      <div className='content'>
        <div className='contentWrapper'>
        {movies.map((movie, index) => (
          <MovieDetails info={movie}>{movies[index].Title}</MovieDetails>
        ))}
        </div>
      </div>
    </div>
  )
}
