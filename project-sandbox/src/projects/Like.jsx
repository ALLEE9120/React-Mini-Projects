import React, {useState, useRef } from 'react'
import Image from './components/Image'
import Header from './components/Header'
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Like() {
  const [like, setLikeState] = useState(false)
  const [animation, setAnimation] = useState(false)
  const [number, setNumber] = useState(32573)

  const handleLike = () => {
    setLikeState(!like)

    if (like) {
      setNumber(number - 1)
    } else {
      setNumber(number + 1)
    }
  }

  const handleDouble = (e) => {
    setLikeState(true)

    if (like) {
      setNumber(number - 1)
    } else {
      setNumber(number + 1)
    }

    setAnimation(true);
    const x = e.nativeEvent.offsetX
    const y =  e.nativeEvent.offsetY

    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    heart.classList.add('centered')
    heart.style.position = 'absolute'
    heart.style.top = `${y - 35}px`
    heart.style.left = `${x - 35}px`
    heart.classList.add('animate')

    setTimeout(() => {
      heart.classList.remove('animate')
      setTimeout(() => {
        heart.remove()
      }, 300);
    }, 100);

    document.querySelector('.image-container').appendChild(heart)
  }

  return (
    <div className='text-center' style={{marginTop: "30px"}}>
      <div className="container-insta">
        <Header />
        <div className="image-container">
          <Image onDouble={(e) => handleDouble(e)} classes="img" url="https://seiboncarbon.com/seicontent/wp-content/uploads/2020/04/spotlight-ryan-hunts-350z_49777612783_o-scaled.jpg" />
        </div>
        <Footer like={like} number={number}onLike={() => handleLike()} />
      </div>
    </div>
  )
}
