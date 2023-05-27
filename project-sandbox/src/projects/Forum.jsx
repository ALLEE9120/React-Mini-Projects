import React from 'react'
import Button from './components/Button'
import {FaUser, FaComment, FaNewspaper} from 'react-icons/fa'
import {useState, useEffect} from 'react'

export default function Forum() {
  const [display, setDisplay] = useState("Posts")
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${display}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [display])

  return (
    <div className='page'>
      <h1>350z FORUM</h1>
      <div className='button-division'>
      <Button text={"Posts"} color={"#116D6E"} icon={<FaUser />} onChange={() => setDisplay("Posts")}/>
      <Button text={"Users"} color={"#116D6E"} icon={<FaComment />} onChange={() => setDisplay("Users")}/>
      <Button classes={"bt"} text={"Comments"} color={"#116D6E"} icon={<FaNewspaper />} onChange={() => setDisplay("Comments")}/>
      </div>
      <div className='content'>
        <h1>{display}</h1>
        {!data ? <p>Error</p> : data.map((item, index) => {
          return (
            <div className="all">
              { item.title && <div className='data'>
              <h2 className='data-title'>{item.title}</h2>
              <p className='data-p'>{item.body}</p>
              </div> }

              { item.username && (<div className='data'>
              <h2 className='data-title'>{item.username}</h2>
              <p className='data-p'>{item.email}</p>
              </div>) }

              { item.body && (<div className='data'>
              <h2 className='data-title'>{item.name}</h2>
              <p className='data-p'>{item.body}</p>
              </div>) }
            </div>
          )
        })}
      </div>
    </div>
  )
}
