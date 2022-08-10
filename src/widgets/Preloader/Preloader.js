import React from 'react'
import './preloader.css'

export function Preloader() {
  return (
    <>
      <div className='wrap'>
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </>
  )
}