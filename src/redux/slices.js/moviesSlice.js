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
      .addCase(fetchMovies.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        console.log(action.payload);
        state.movies = action.payload
        // state.isLoading = false
        state.pages = []
        state.currentPage = 1
        for(let i = 1; i <= (Math.ceil(action.payload.length / 4)); i++){
          state.pages.push(i)
        }
      })
      .addCase(fetchMovies.rejected, state => {
        state.error = true
        // state.isLoading = false
      })

      .addCase(fetchInfo.pending.type, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchInfo.fulfilled.type, (state, {payload}) => {
        state.movieDetails = payload
        state.isLoading = false
      })
      .addCase(fetchInfo.rejected.type, state => {
        state.error = true
        state.isLoading = false
      })
  }
})

export const { addMovies, setPages, setCurrentPage, setMovieDetails } = movieSlice.actions