import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {TiStarburst} from 'react-icons/ti'

const ADRQualificationTag = ({ qualification, callback }) => {
    const [hover, setHover] = useState(false)
    const onClick = () => {
        callback(qualification.id)
    }
  return (
      <div key={"q" + qualification.id} onClick={onClick} onMouseLeave={()=>setHover(false)} onMouseEnter={()=>setHover(true)} className="border-2 px-2 cursor-default font-medium flex gap-1 whitespace-nowrap  py-1 text-[#DE7C5A] items-center rounded-full border-[#DE7C5A] shadow-md">
          {qualification.name} {hover ? <AiOutlineClose size={20}/> :<TiStarburst size={20}/>}
    </div>
  );
}

export default ADRQualificationTag