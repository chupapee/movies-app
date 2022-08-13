import React from 'react'
import s from './preloader.module.css'

export function Preloader() {
  return (
    <>
      <div className={s.wrap}>
        <div className={s.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </>
  )
}