import React from 'react'

export default function Image({url, classes, onDouble, ref}) {
  return (
      <img src={url} className={classes} alt="" onDoubleClick={onDouble} />
  )
}
