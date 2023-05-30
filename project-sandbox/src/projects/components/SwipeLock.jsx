import React from 'react'
import '../../projects/SwipeLock.css'

export default function SwipeLock({handleInput, sliderValue}) {
  let sliderStyle = {
    appearance: 'none',
    width: '300px',
    height: '0px',
    position: 'absolute',
    top: '81%',
    left: '13%',
    transform: 'translate(0%, -50%)',
    rotate: '-90deg',
    background: 'transparent',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: '1',
  }

  return (
    <input min="0" defaultValue="0" max="100" value={sliderValue} onInput={handleInput} className="slider" type="range" style={sliderStyle} />
  )
}
