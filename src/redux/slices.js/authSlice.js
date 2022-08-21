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
      return [email, login]
    }
    throw new Error('invalid email')
  } catch (e) {
    return rejectWithValue(e)
  }
  }
)

const initialState = {
  login: localStorage.getItem('login'),
  email: localStorage.getItem('email'),
  img: localStorage.getItem('icon') || 'https://c.tenor.com/SLT0MF-wqRgAAAAC/laughing-leonardo-dicaprio.gif',
  isValid: true,
  checking: false,
  checked: false
}

export const authSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setLogin: (state, { payload }) => {
      const login = payload.length > 0 ? payload : state.login
      state.login = login
      localStorage.setItem('login', login)
    },
    setImg: (state, action) => {
      state.img = action.payload
      localStorage.setItem('icon', action.payload)
    }
  },
  extraReducers: builder => {
    builder
    .addCase(checkEmail.pending, state => {
      state.checking = true
    })
    .addCase(checkEmail.fulfilled, (state, {payload}) => {
      state.isValid = true
      state.email = payload[0]  // email
      state.login = payload[1]  // login
      state.checked = true
      state.checking = false
    })
    .addCase(checkEmail.rejected, (state, action) => {
      state.isValid = false
      state.checking = false
    })
  }
})

export const { setLogin, setImg } = authSlice.actions