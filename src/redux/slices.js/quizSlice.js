import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { quizApi } from "../../service/quizAPI"

export const getQuizList = createAsyncThunk(
  'quiz/getQuizList',
  async (nothing, { rejectWithValue }) => {
    try {
      const list = await quizApi.fetchQuizList()
      if(list) {
        return list
      }
      throw new Error()
    } catch(error){
      return rejectWithValue(error)
    }
  }
)

const initialState = {
  quizList: [],
  isLoading: false,
  isError: false
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(getQuizList.pending, state => {
      state.quizList = []
      state.isLoading = true
    })
    .addCase(getQuizList.fulfilled, (state, action) => {
      state.isLoading = false
      state.quizList = action.payload
    })
    .addCase(getQuizList.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
    })
  }
})
