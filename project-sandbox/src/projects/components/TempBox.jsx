import React from 'react'

export default function TempBox({temp, color}) {
  return (
    <div className='TempBox' style={{backgroundColor: color}}>
      <h1>{temp}° C</h1>
    </div>
  )
}
