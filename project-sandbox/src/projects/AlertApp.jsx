import React from 'react'
import Alert from './components/Alert'

export default function AlertApp() {
  return (
    <div className={"alert-container"}>
      <Alert delay={true} status="danger" text="Error! recipient doesn't exist" />
      <Alert status="success" text="Message Sent Successfully!" />
    </div>
  )
}
