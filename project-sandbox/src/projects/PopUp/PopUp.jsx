import React from 'react'
import Button from '../components/Button'
import PopUpC from '../components/PopUpC'
import { useState, useEffect } from 'react'

export default function PopUp() {
  const [popup, setPopup] = useState(false)
  const [popupTime, setPopupTime] = useState(false)
  const handleClose = () => {
    setPopup(false)
  }

  const handleCloseP = () => {
    setPopupTime(false)
  }

  const handleOpen = () => {
    setPopup(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setPopupTime(true)
    }, 5000);
  },)


  return (
    <div className='container' style={{backgroundColor: '#1a1a1a', boxShadow: 'none', width: '100vw', height: '90vh'}}>
      <Button onChange={handleOpen} text='Pop up!' color='white' />
      {popup && <PopUpC handleClose={handleClose} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius, maxime voluptas' title="Button Popup activated" />}
      {popupTime && <PopUpC handleClose={handleCloseP} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius, maxime voluptas' title="Timer Popup activated" />}
    </div>
  )
}
