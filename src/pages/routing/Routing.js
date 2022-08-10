import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { HomePage } from '../HomePage/HomePage'
import { Header } from "../../widgets/Header/Header";
import { useSelector } from 'react-redux/es/exports';
import { Preloader } from '../../widgets/Preloader/Preloader';

export function Routing() {
  const link = useSelector(state => state.movies.movieDetails.imdbID)
  const url = `/${link}`
  return (
    <BrowserRouter>
      <Header />
      <div className='wrapper'>
        <Routes>
          <Route path='/*' element={<HomePage />}/>
          <Route path={url} element={<MovieDetails />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
