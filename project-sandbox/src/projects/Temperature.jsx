import React from 'react'
import TempBox from './components/TempBox'
import Button from './components/Button'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Temperature() {
  const [temp, setTemp] = useState(0)

  function handleMinus() {
    setTemp(temp - 1)
    console.log(temp)
  }

  function handlePlus() {
    setTemp(temp + 1)
    console.log(temp)
  }

  const getBackgroundColor = () => {
    // Define your temperature range and corresponding colors here
    const colorRange = [
      { temp: -10, color: '#003399' },
      { temp: 0, color: '#0099FF' },
      { temp: 10, color: '#99CCFF' },
      { temp: 17, color: '#FFFF99' },
      { temp: 26, color: '#FFCC66' },
      { temp: 30, color: '#FF6600' },
      { temp: 55, color: '#FF0000' },
    ];


    for (let i = 0; i < colorRange.length - 1; i++) {
      if (temp >= colorRange[i].temp && temp < colorRange[i + 1].temp) {
        return colorRange[i].color;
      }
    }
  }


  return (
    <div className='container'>
      <TempBox temp={temp} color={getBackgroundColor()} />
      <div className="buttons-div">
        <Button onChange={handleMinus} icon={<FaMinus />} text={" "} color={'black'} />
        <Button  onChange={handlePlus} icon={<FaPlus />} text={" "} color={'black'} />
      </div>
    </div>
  )
}
