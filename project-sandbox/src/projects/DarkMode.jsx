import React from 'react'
import Button from './components/Button'
import {useState} from 'react'

export default function DarkMode() {
  const [mode, setMode] = useState("Light Mode")
  const [color, setColor] = useState("white")

  function changeMode() {
    const body = document.querySelector("body")
    if (mode === "Light Mode") {
      setMode("Dark Mode")
      setColor("black")
      body.style.backgroundColor = "white"
      body.style.color = "black"

    } else {
      setMode("Light Mode")
      setColor("white")
      body.style.backgroundColor = "black"
      body.style.color = "white"
    }
  }

  return (
    <div>
      <Button onChange={changeMode} color={color} text={mode}/>
      <h1 style={{width: "100%", textAlign: "center"}}>Lorem Ipsem</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
    </div>
  )
}
