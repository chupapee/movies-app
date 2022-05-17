import { createSlice } from "@reduxjs/toolkit"

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {movies: []},
  reducers: {
    addMovies: (state, action) => {
      state.movies.push(...action.payload)
    }
  }
})

export const { addMovies } = movieSlice.actions
