import React, { useState } from 'react'
import './auth.css'
import { checkEmail } from "../../redux/slices.js/authSlice";
import {useDispatch, useSelector} from "react-redux";

export function Auth() {

  const dispatch = useDispatch()

  function formHandler(e){
    e.preventDefault()
    if(passwordRegex.test(password) && emailRegex.test(email)){
      dispatch(checkEmail(e.target.email.value))
    }
  }

  const checking = useSelector(state => state.auth.checking)
  const isValid = useSelector(state => state.auth.isValid)

  const [password, setPassword] = useState('')
  const [passBlur, setPassBlur] = useState(false)
  const passwordRegex = new RegExp('[0-9]{10}')
  const passBlurHandler = () => {
    setPassBlur(true)
  }

  const [email, setEmail] = useState('')
  const [emailBlur, setEmailBlur] = useState(false)
  const emailRegex = new RegExp('/(.+)@(.+){2,}\\.(.+){2,}/')
  const emailBlurHandler = () => {
    setEmailBlur(true)
  }

  return (
    <>
    <h1 className='authHeader'>W E L C O M E</h1>
    <form onSubmit={formHandler} className='Authform' autoComplete='off'>
      <input name='email' type="email" placeholder='Email' required=""
             autoFocus=""
             onChange={e => setEmail(e.target.value)} value={email}
             onBlur={emailBlurHandler}
      />
      {!isValid && <p>Please, enter valid email address</p>}
      {emailBlur && !emailRegex.test(email) && <p>wrong email!</p>}
      <input name='password'
             type="password"
             placeholder='Password'
             pattern=''
             onChange={e => setPassword(e.target.value)}
             value={password}
             onBlur={passBlurHandler}
      />
      {passBlur && !passwordRegex.test(password) && <p>password must contain 10 numbers at least</p>}
      <input type='submit'
             value='Sign in'
             className='formBtn'
             disabled={checking}
      />
    </form>
    </>
  )
}
