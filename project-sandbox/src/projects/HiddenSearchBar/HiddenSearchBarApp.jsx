import React, { useState, useEffect } from 'react'
import { BsSearch } from "react-icons/bs"

export default function HiddenSearchBarApp() {
  const [search, setSearch] = useState(false)
  const [uiProps, setUiProps] = useState({
    backgroundColor: "#1a1a1a",
    transitions: "all 0.5s ease-in-out",
    showSearchIcon: true,
    opacity: 0,
    shadow: "",
  })

  let body = document.body.style

  const handleSearch = () => {
    setUiProps({
      opacity: 1,
      showSearchIcon: false
    })
  };

  const handleClickIcon = () => {
    setUiProps({ showSearchIcon: false });
  };

  const handleSearchFocus = () => {
    setUiProps({
    shadow: "inset 0 -40vh 30vw 10px #9f55ae",
    })
  }


  const handleBlur = () => {
    setUiProps({
      shadow: "",
      showSearchIcon: true,
    })
  }

  let inputStyle ={
    width: 200,
    height: 40,
    fontSize: 20,
    backgroundColor: "transparent",
    border: "none",
    borderRadius: 50,
    padding: 10,
    marginTop: 20,
    color: "#9f55ae",
    outline: "2px solid #9f55ae",
    boxShadow: "0 0 10px #9f55ae",
  }

  let bsSearchStyle= {
    fontSize: 40,
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 20,
  }



  useEffect(() => {
    body.backgroundColor = uiProps.backgroundColor
    body.transition = uiProps.transitions
    // body.opacity = uiProps.opacity
    body.boxShadow = uiProps.shadow
  }, [uiProps.shadow])


  return (
    <div className='HiddenSearch'>
     {!uiProps.showSearchIcon && <input
      type="text"
      placeholder='Search...'
      className="input"
      style={inputStyle}
      onFocus={handleSearchFocus}
      onBlur={handleBlur}/>}
      {uiProps.showSearchIcon? <BsSearch style={bsSearchStyle} onClick={handleClickIcon} /> : null}
    </div>
  )
}
