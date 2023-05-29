import React from 'react'
import { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function Alert({text, status, delay = false}) {
  const [alert, setAlert] = useState(true)

  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        setAlert(false)
      }, 20000);
    }
  },)

  return ( alert && <div
    style={{
      backgroundColor: status === "danger" ? "#ef7b7b" : "#7bef8c",
      border: status === "danger" ? "1px solid #a70000;" : "1px solid #08a700",
    }}
    className="alert"
  >
    <p>{text}</p>
    <button  onClick={() => setAlert(false)}><FaTimes /></button>
    </div>
  )
}
