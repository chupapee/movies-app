import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { searchApi } from '../../dal/searchMovieAPI'

export const fetchMovies = createAsyncThunk(
  'movies/addMovies',
  async (movieTitle, refreshData) => {
    console.log(movieTitle);
    const newMovies = await searchApi.findMovie(movieTitle)
    return newMovies
  }
)

export const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    currentPage: 1,
    pages: [],
    isLoading: false,
    error: false
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies.push(...action.payload)
      for(let i = 1; i <= (Math.ceil(action.payload.length / 3)); i++){
        state.pages.push(i)
      }
    },
    setPages: (state, action) => {
      state.pages = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    }
  },
  extraReducers: {
    [addMovies.pending]: state => {
      state.isLoading = true
    },
    [addMovies.fulfilled]: (state, action) => {
      state.movies.push(...action.payload)
      for(let i = 1; i <= (Math.ceil(action.payload.length / 3)); i++){
        state.pages.push(i)
      }
    },
    [addMovies.error]: (state, action) => {
      state.error = true
    }
  }
})

export const { addMovies, setPages, setCurrentPage } = movieSlice.actions
