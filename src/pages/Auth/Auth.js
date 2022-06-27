import React from 'react'
import { authApi } from '../../dal/authApi';
import { checkEmail } from '../../redux/slices.js/authSlice';
import './auth.css'

export function Auth() {

  function loginHandler(e){
    // console.log(e);
  }

  function signInHandler(e){
    // console.log(e);
  }

  function formHandler(e){
    e.preventDefault()
    checkEmail({email: 'kamolkhamidov200002@gmail.com', login: 'someLogin'})
    // authApi.checkEmail(e.target.email.value)
    // .then(resp => console.log(resp))
  }

  return (
    <>
    <h1 className='authHeader'>Authorization</h1>
    <form onSubmit={formHandler} className='Authform'>
      <input name='login' type="text" placeholder='Login'/>
      <input name='email' type="email" placeholder='Email'/>
      <input name='password' type="password" placeholder='Password' />
      <button onClick={loginHandler}>Log in</button>
      <button onClick={signInHandler}>Sign in</button>
    </form>
    </>
  )
}
