import { createSlice, createAsyncThunk, } from "@reduxjs/toolkit"
import { authApi } from "../../service/authApi"

export const checkEmail = createAsyncThunk(
  'email/checkEmail',
  async (data, { rejectWithValue}) => {
    const [email, login] = data
  try {
    const isValid = await authApi.checkEmail(email)
    if(isValid) {
      localStorage.setItem('email', email)
      localStorage.setItem('login', login)
      return login
    }
    throw new Error('invalid email')
  } catch (e) {
    return rejectWithValue(e)
  }
  }
)

const initialState = {
  login: '',
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
      state.login = action.payload
      state.checked = true
      state.checking = false
    })
    .addCase(checkEmail.rejected, (state, action) => {
      state.isValid = false
      state.checking = false
    })
  }
})
