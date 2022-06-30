import React from 'react'
import './auth.css'
import { checkEmail } from "../../redux/slices.js/authSlice";
import {useDispatch, useSelector} from "react-redux";

export function Auth() {

  const dispatch = useDispatch()

  function formHandler(e){
    e.preventDefault()
    dispatch(checkEmail(e.target.email.value))
  }

  const checking = useSelector(state => state.auth.checking)
  const isValid = useSelector(state => state.auth.isValid)

  return (
    <>
    <h1 className='authHeader'>W E L C O M E</h1>
    <form onSubmit={formHandler} className='Authform' autoComplete='off'>
      <input name='email' type="email" placeholder='Email' required=""
             autoFocus=""
             pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
      />
      {!isValid && <div>invalid email</div>}
      <input name='password' type="password" placeholder='Password' />
      <input type='submit'
             value='Sign in'
             className='formBtn'
             disabled={checking}
      />
    </form>
    </>
  )
}
