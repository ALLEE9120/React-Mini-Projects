import React, {useState, useRef } from 'react'
import Image from './components/Image'
import Header from './components/Header'
import Footer from './components/Footer'
import fa from 'font-awesome/css/font-awesome.css'

export default function Like() {
  const [like, setLikeState] = useState(false)

  const handleLike = () => {
    setLikeState(!like)
  }

  const handleDouble = (e) => {
    setLikeState(true)
    const x = e.nativeEvent.offsetX
    const y =  e.nativeEvent.offsetY

    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    heart.style.top = `${y}px`
    heart.style.left = `${x}px`

    document.querySelector('.image-container').appendChild(heart)
  }

  return (
    <div className='text-center' style={{marginTop: "30px"}}>
      <div className="container-insta">
        <Header />
        <div className="image-container">
          <Image onDouble={(e) => handleDouble(e)} classes="img" url="https://seiboncarbon.com/seicontent/wp-content/uploads/2020/04/spotlight-ryan-hunts-350z_49777612783_o-scaled.jpg" />
        </div>
        <Footer like={like} onLike={() => handleLike()} />
      </div>
    </div>
  )
}
