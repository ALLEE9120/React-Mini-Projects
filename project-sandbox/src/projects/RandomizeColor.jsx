import React from 'react'
import Title from './components/Title'
import Button from './components/Button'

export default function RandomizeColor() {

  const getRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
  }

  const handleClick = (e) => {
   document.querySelector('.title').style.color = getRandomColor()
    console.log("hello")
    e.target.style.backgroundColor = getRandomColor();
  }


  return (
    <div className="text-center">
      <Title text="Randomize Color" />
      <div className="buttons">
        <Button text="Click Me" onChange={(e) => handleClick(e)}/>
        <Button text="ME TOOO!" onChange={(e) => handleClick(e)}/>
        <Button text="ME THREEE!" onChange={(e) => handleClick(e)} />
        </div>
    </div>
  )
}
