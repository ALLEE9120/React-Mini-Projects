import React from 'react'
export default function Title({text, classes}) {
  return (
    <h1 className={!classes ? 'title' : classes}>{!text ? 'Title' : text}</h1>
  )
}
