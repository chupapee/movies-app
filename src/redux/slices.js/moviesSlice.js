import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { searchApi } from '../../service/searchMovieAPI'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (movieTitle, { rejectWithValue }) => {
    try {
      let fullData = {}
      const data = await searchApi.findMovie(movieTitle, 1) // second arg is pageNum
      if(data.Response === 'True') {
        fullData = data.Search
        const secondData = await searchApi.findMovie(movieTitle, 2)
        if(secondData.Response === 'True') fullData.push(...secondData.Search)
        return fullData
      }
      throw data.Error
    } catch(error){
      return rejectWithValue(error)
    }
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
  isLoading: false,
  error: ''
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false
        state.movies = action.payload
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.error = action.payload
        state.isLoading = false
      })

      .addCase(fetchInfo.pending, (state, action) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(fetchInfo.fulfilled, (state, {payload}) => {
        state.movieDetails = payload
        state.isLoading = false
      })
      .addCase(fetchInfo.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})