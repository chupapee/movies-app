import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MovieDetails } from './MovieDetails/MovieDetails';
import HomePage from './HomePage/HomePage';
import { Header } from '../widgets/Header/Header';

export function Routing() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Routes>
          <Route path='/*' element={<HomePage />}/>
          <Route path='/movieDetails' element={<MovieDetails />}/>    
        </Routes>
      </div>
    </BrowserRouter>
  )
}
