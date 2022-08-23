import React from 'react'

export default function Button({ buttonText, onClick, style }) {
  return (
    <div>
      <button className='action_button' onClick={onClick} style={style}>{buttonText}</button>
    </div>
  )
}
