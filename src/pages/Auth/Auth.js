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
    checkEmail(e.target.email.value)
  }

  return (
    <>
    <h1 className='authHeader'>Welcome</h1>
    <form onSubmit={formHandler} className='Authform' autoComplete='off'>
      <input name='email' type="email" placeholder='Email' required=""
             autoFocus=""
             pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"/>
      <input name='password' type="password" placeholder='Password' />
      <input type='submit' value='Sign in' className='formBtn'/>
    </form>
    </>
  )
}
