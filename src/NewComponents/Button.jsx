import React from 'react'
import './Button.css'

function Button({label,name,color}) {
  return (
    <div>
        <h1 style={{color}}>{name ?? 'searching'}</h1>
        <button className='btn'>{label ?? 'Click'}</button>   
    </div>
  )
}

export default Button