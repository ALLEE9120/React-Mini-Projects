import React from 'react'

export default function SliderW({sliderValue, handleInput}) {
  let sliderStyle = {
    appearance: 'none',
    width: '300px',
    background: '#333',
    color: '#fff',
    outline: 'none',
    borderRadius: '14px',
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.7)"
  }

  return (
    <div>
    <input min="0" defaultValue="0" value={sliderValue} onInput={handleInput} max="100" className="sliderW" type="range" style={sliderStyle} />
    </div>
  )
}
