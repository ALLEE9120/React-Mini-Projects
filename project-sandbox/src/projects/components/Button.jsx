import React from 'react'

export default function Button({text, color, onChange}) {
  return (
    <button className={"btn"} style={{backgroundColor: color}} onClick={onChange}>{text ? text : "Button" }</button>
  )
}
