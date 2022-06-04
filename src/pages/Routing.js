import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieDetails } from './MovieDetails/MovieDetails';
import HomePage from './HomePage/HomePage';

export function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<HomePage />}/>
        <Route path='/movieDetails' element={<MovieDetails />}/>    
      </Routes>
    </BrowserRouter>
  )
}
