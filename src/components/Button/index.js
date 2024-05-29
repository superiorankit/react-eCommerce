import React from 'react'
import "./button.css"

const Button = ({text,handle}) => {
  return (
    <div className='buttonMain' onClick={handle}>
      {text}
    </div>
  )
}

export default Button
