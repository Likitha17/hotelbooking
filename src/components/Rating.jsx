import React from 'react'
import { assets } from '../assets/assets'

const Rating = ({ rating = 4}) => {
  return (
    <>
      {Array(5).fill(0).map((index) => (
         <img src={rating>index ? assets.starIconFilled : assets.starIconOutlined} alt="Star" className="w-5 h-5" />
         ))}
    </>
  )
}

export default Rating
