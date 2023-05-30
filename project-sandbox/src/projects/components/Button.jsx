import React from 'react'

export default function Button({text, color, onChange, icon, classes}) {
  return (
    <button onClick={onChange} className={`${classes} btn`} style={{backgroundColor: color, color: color === "black" ? "white" : "black" }}>{icon} {text ? text : "Button" }</button>
  )
}
