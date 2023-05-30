import React from 'react'
import SwipeLock from './components/SwipeLock'
import { useState, useEffect } from 'react'

export default function Swipe() {
  const [sliderValue, setSliderValue] = useState(0)
  const [unlocked, setUnlocked] = useState(false)

  const handleInput = (e) => {
    setSliderValue(e.target.value)
    console.log(sliderValue)
  }

  useEffect(() => {
    if (sliderValue > 60) {
      setUnlocked(true)
    }
  }, [sliderValue])

  const handleLock = () => {
    setUnlocked(false)
    setSliderValue(0)
  }

  return (
    <div>
      {!unlocked ? <div className='iphone' style={{overflowY: "hidden"}}>
      <div className='iphone__header'>
        <div className='iphone__header__camera'></div>
        <div className='iphone__time'><p>Monday, 12 September</p><h1>17:38</h1></div>
        </div>
        <SwipeLock handleInput={handleInput}/>
    </div>: <div className='iphone'>
      <div className='iphone__header'>
        <div className='iphone__header__camera'></div>
        <div className='iphone__time'><p style={{fontSize: "55px", overflowY: "hidden"}}>UNLOCKED</p></div>
        <button onClick={handleLock}>Lock</button>
        </div>
        </div>}

    </div>
  )
}
