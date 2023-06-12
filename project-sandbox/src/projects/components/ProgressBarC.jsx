import React from 'react'

export default function ProgressBarC({completed, bgColor}) {
  const fillerStyle = {
    width: `${completed}%`,
    backgroundColor: bgColor,
  }

  const contentStyle = {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '20px'
  }

  return (
    <div className='progress-bar'>
      <div className="filler" style={fillerStyle}>
        <span style={contentStyle}>{completed}%</span>
      </div>
    </div>
  )
}
