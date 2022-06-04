import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './movies.css'
import { MovieInfo } from '../../widgets/MovieInfo/MovieInfo'
import { Preloader } from '../../widgets/Preloader/Preloader';
import Pagination from '../../widgets/Pagination/Pagination';

export function Movies() {

  let movies = useSelector(state => state.movies.movies)
  const currentPage = useSelector(state => state.movies.currentPage)
  
  //  array created for pagination
  const [devidedMovies, setDevidedMovies] = useState([])

  // function that takes 3 array elements
  const devideArrayByThree = (arr, index) => arr.splice((index - 1) * 3, 3)

  // take 3 store movies items
  const devideMoviesByThree = () => {
    setDevidedMovies(devideArrayByThree([...movies], currentPage))
  }

  useEffect(() => {
    devideMoviesByThree()
  }, [movies, currentPage])

  return (
    <>
    {!movies ? <Preloader /> :
      devidedMovies.map((movie, index) => (
        <MovieInfo key={index} info={movie}>{movies[index].Title}</MovieInfo>
      ))
    }
    <Pagination currentPage={currentPage}/>
    </>
  )
}
