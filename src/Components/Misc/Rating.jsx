import React from 'react'
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const Rating = ({ratingValue}) => {
  return (
      <div className='flex gap-3'>
          {ratingValue === 0 ? <RiStarLine size={25} className="text-[#DE7C5A] drop-shadow-md"/> : ratingValue < 20 ? <RiStarHalfFill size={25} className="text-[#DE7C5A] drop-shadow-md"/> : <RiStarFill size={25} className="text-[#DE7C5A] drop-shadow-md"/>}
          {ratingValue <= 20 ? <RiStarLine size={25} className="text-[#DE7C5A] drop-shadow-md"/> : ratingValue < 40 ? <RiStarHalfFill size={25} className="text-[#DE7C5A] drop-shadow-md"/> : <RiStarFill size={25} className="text-[#DE7C5A] drop-shadow-md"/>}
          {ratingValue <= 40 ? <RiStarLine size={25} className="text-[#DE7C5A] drop-shadow-md"/> : ratingValue < 60 ? <RiStarHalfFill size={25} className="text-[#DE7C5A] drop-shadow-md"/> : <RiStarFill size={25} className="text-[#DE7C5A] drop-shadow-md"/>}
          {ratingValue <= 60 ? <RiStarLine size={25} className="text-[#DE7C5A] drop-shadow-md"/> : ratingValue < 80 ? <RiStarHalfFill size={25} className="text-[#DE7C5A] drop-shadow-md"/> : <RiStarFill size={25} className="text-[#DE7C5A] drop-shadow-md"/>}
          {ratingValue <= 80 ? <RiStarLine size={25} className="text-[#DE7C5A] drop-shadow-md"/> : ratingValue < 100 ? <RiStarHalfFill size={25} className="text-[#DE7C5A] drop-shadow-md"/> : <RiStarFill size={25} className="text-[#DE7C5A] drop-shadow-md"/>}
    </div>
  )
}

export default Rating