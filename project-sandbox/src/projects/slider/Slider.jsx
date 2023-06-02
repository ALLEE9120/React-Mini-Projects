import React from 'react'
import SliderW from '../components/Slider'
import { useState, useEffect } from 'react'

export default function Slider() {
  const [sliderValue, setSliderValue] = useState(0)
  const [text, setText] = useState('Small Text')

  const handleInput = (e) => {
    setSliderValue(e.target.value)
    console.log(sliderValue)
  }

  useEffect(() => {
    if (sliderValue > 80) {
      setText('Biggerest Text')
    } else if (sliderValue > 50) {
      setText('Bigger Text')
    } else if (sliderValue > 15) {
      setText('Big Text')
    } else if (sliderValue < 10) {
      setText('Small Text')
    }
  }, [sliderValue])

  return (
    <div className='slider-div'>
      <SliderW handleInput={handleInput} />
      <h1 style={{ fontSize: `${+sliderValue + 20}px` }}>{text}</h1>
    </div>
  )
}
