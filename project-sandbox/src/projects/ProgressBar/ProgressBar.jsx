import React, { useRef, useEffect, useState } from 'react'
import ProgressBarC from '../components/ProgressBarC'

export default function ProgressBar() {
  const [status, setStatus] = useState({
    ui: 45,
    ux: 10,
    data: 15,
    random: 56,
  })

  const uiRef = useRef(null)

  useEffect(() => {
    uiRef.current.focus()

    setInterval(() => setStatus({...status, random: Math.floor(Math.random() * 90) + 10}) , 2000);
  }, [])

  const projectData = [
    {completed: status.ui, bgColor: "#F15412"},
    {completed: status.ux, bgColor: "#34B3F1"},
    {completed: status.data, bgColor: "#E11EEE"},
    {completed:  status.random}
  ]

  return (
    <div>
      <div>
        <ul>
          <li>UI Status: {' '}
            <input
              type="number"
              ref={uiRef}
              min={1}
              max={100}
              onChange={(e) => setStatus({...status, ui: e.target.value})}
              value={status.ui}
              />
          </li>
          <li>UX Status: {' '}
            <input
              type="number"
              value={status.ux}
              min={1}
              max={100}
              onChange={(e) => setStatus({...status, ux: e.target.value})}
              />
          </li>
          <li>DATA Status: {' '}
            <input
              type="number"
              value={status.data}
              min={1}
              max={100}
              onChange={(e) => setStatus({...status, data: e.target.value})}
              />
          </li>
        </ul>
      </div>
      <div className="slider-div">
      {projectData.map((data) => (
        data.bgColor ?
        <ProgressBarC completed={data.completed} bgColor={data.bgColor} /> :
        <ProgressBarC completed={data.completed} bgColor={status.random > 50 ? "#77024D" : "#C31207"} />
      ))}
      </div>
    </div>
  )
}
