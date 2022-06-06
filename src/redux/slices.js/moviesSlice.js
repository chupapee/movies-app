import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import { searchApi } from '../../dal/searchMovieAPI'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (movieTitle) => {
    const newMovies = await searchApi.findMovie(movieTitle)
    return newMovies
  }
)

export const fetchInfo = createAsyncThunk(
  'movies/fetchInfo',
  async (movieTitle) => {
    const info = await searchApi.fetchInfo(movieTitle)
    return info
  }
)

const initialState = {
  movies: [],
  movieDetails: [],
  currentPage: 1,
  pages: [],
  isLoading: false,
  error: false
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
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

      .addCase(fetchInfo.pending.type, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchInfo.fulfilled.type, (state, {payload}) => {
        console.log(payload);
        state.movieDetails = payload
        state.isLoading = false
      })
      .addCase(fetchInfo.rejected.type, state => {
        state.error = true
      })
  }
})

export const { addMovies, setPages, setCurrentPage, setMovieDetails } = movieSlice.actions