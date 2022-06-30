import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit"
import { authApi } from "../../dal/authApi"

export const checkEmail = createAsyncThunk(
  'email/checkEmail',
  async (email, { rejectWithValue}) => {
  try {
    const isValid = await authApi.checkEmail(email)
    if(isValid) return isValid
    throw new Error('invalid email')
  } catch (e) {
    return rejectWithValue(e)
  }
  }
)

const initialState = {
  isValid: true,
  checking: false,
  checked: false
}

export const authSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(checkEmail.pending, state => {
      state.checking = true
    })
    .addCase(checkEmail.fulfilled, (state, action) => {
      state.isValid = true
      state.checked = true
      state.checking = false
    })
    .addCase(checkEmail.rejected, (state, {payload}) => {
      state.isValid = false
      console.log(payload)
      state.checking = false
    })
  }
})
