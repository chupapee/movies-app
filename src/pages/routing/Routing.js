import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { HomePage } from '../HomePage/HomePage'
import { Header } from "../../widgets/Header/Header";
import { useSelector } from 'react-redux/es/exports';
import Auth from '../Auth/Auth';

export function Routing() {
  const link = useSelector(state => state.movies.movieDetails.imdbID)
  const url = `/${link}`
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Routes>
          <Route path='/*' element={<HomePage />}/>
          <Route path={url} element={<MovieDetails />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
