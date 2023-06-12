import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function PopUpC({title, text, handleClose}) {

  return ( alert &&
    <div className="Popup">
      <div className="textPop">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <button onClick={handleClose} ><FaTimes /></button>
    </div>
  )
}
