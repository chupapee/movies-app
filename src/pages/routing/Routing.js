import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { HomePage } from '../HomePage/HomePage'
import { Header } from "../../widgets/Header/Header";
import { useSelector } from 'react-redux/es/exports';
import { Quiz } from '../QuizPage/Quiz';

export function Routing() {
  const link = useSelector(state => state.movies.movieDetails.imdbID)
  const URL = `/${link}`
  return (
    <BrowserRouter>
      <Header />
      <div className='wrapper'>
        <Routes>
          <Route path='/*' element={<HomePage />}/>
          <Route path={URL} element={<MovieDetails />}/>
          <Route path='/quiz' element={<Quiz />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
