import React from 'react'
import { authApi } from '../../dal/authApi';
import './auth.css'
import { checkEmail } from "../../redux/slices.js/authSlice";
import {useDispatch} from "react-redux";

export function Auth() {

  const dispatch = useDispatch()

  function formHandler(e){
    e.preventDefault()
    dispatch(checkEmail(e.target.email.value))
  }

  return (
    <>
    <h1 className='authHeader'>W E L C O M E</h1>
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
