import React from 'react'
import {AiOutlineComment, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function Footer({like, onLike, number}) {
  return (
    <div className='footer'>
      <div className='footer-buttons'>
        <button className='btn comment'><AiOutlineComment /></button>
        <button className='btn heart' onClick={onLike}>{ like ? <AiFillHeart className='like' /> : <AiOutlineHeart/>}</button>
      </div>
      <div className='footer-likes'>
        <p>{number.toLocaleString()} likes</p>
      </div>
    </div>
  )
}
