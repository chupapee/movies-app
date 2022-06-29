import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit"
import { authApi } from "../../dal/authApi"

export const checkEmail = createAsyncThunk(
  'email/checkEmail',
  async (email, rejectWithValue) => {
    console.log('dasdsa')
    try {
      debugger
      console.log(email);
      const isValid = await authApi.checkEmail(email)
      // if(isValid === 'DELIVERABLE') return isValid
      throw new Error()
    } catch(e) {
      return rejectWithValue(e)
    }
  }
)

const initialState = {
  isValid: false,
  login: '',
  checking: false
}

export const movieDetailsSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(checkEmail.pending, state => {
      console.log('sdasdsa')
      state.checking = true
    })
    .addCase(checkEmail.fulfilled, (state, action) => {
      state.isValid = true
      console.log(action.payload);
      state.checking = false
    })
    // .addCase(checkEmail.rejected, (state) => {
    //   state.isValid = false,
    //   state.checking = false
    // })
  }
})
