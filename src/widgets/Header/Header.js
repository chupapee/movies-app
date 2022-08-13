import React from 'react'
import { useSelector } from 'react-redux'
import './style.css'

export function Header() {

  const login = useSelector(state => state.auth.login) || localStorage.getItem("login")

  return (
    <div className='header'>
      <img
        className='headerIcon'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
        alt="imdbIcon"
      />
      <p>{login}</p>
    </div>
  )
}
