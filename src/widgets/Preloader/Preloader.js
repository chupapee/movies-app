import React from 'react'

export function Preloader() {
  return (
    <div style={{width: '100%', textAlign: 'center'}}>
      <img style={{height: '60vh', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
           src='https://i.pinimg.com/originals/36/3c/2e/363c2ec45f7668e82807a0c053d1e1d0.gif'/>
    </div>
  )
}