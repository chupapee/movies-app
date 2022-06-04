import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { searchApi } from '../../dal/searchMovieAPI'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (movieTitle) => {
    const newMovies = await searchApi.findMovie(movieTitle)
    return newMovies
  }
)

const initialState = {
  movies: [],
  movieDetails: null,
  currentPage: 1,
  pages: [],
  isLoading: false,
  error: false
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies.push(...action.payload)
      state.pages = []
      for(let i = 1; i <= (Math.ceil(action.payload.length / 3)); i++){
        state.pages.push(i)
      }
    },
    setPages: (state, action) => {
      state.pages = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending.type, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchMovies.fulfilled.type, (state, {payload}) => {
        state.movies = payload
        state.pages = []
        state.currentPage = 1
        for(let i = 1; i <= (Math.ceil(payload.length / 3)); i++){
          state.pages.push(i)
        }
          state.isLoading = false
      })
      .addCase(fetchMovies.rejected.type, state => {
        state.error = true
      })
  }
})

export const { addMovies, setPages, setCurrentPage, setMovieDetails } = movieSlice.actions
