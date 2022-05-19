import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { searchApi } from '../../dal/searchMovieAPI'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (movieTitle, refreshData) => {
    const newMovies = await searchApi.findMovie(movieTitle)
    return newMovies
  }
)

const initialState = {
  movies: [],
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending.type, state => {
        state.isLoading = true
      })
      .addCase(fetchMovies.fulfilled.type, (state, action) => {
         state.movies.push(...action.payload)
         for(let i = 1; i <= (Math.ceil(action.payload.length / 3)); i++){
          state.pages.push(i)
         }
         state.isLoading = false
      })
      .addCase(fetchMovies.error.type, state => {
        state.error = true
      })
  }
})

export const { addMovies, setPages, setCurrentPage } = movieSlice.actions
