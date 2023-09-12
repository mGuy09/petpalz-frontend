import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { useNavigate } from 'react-router';

const ChatUserIcon = ({userId, image, fname, lname, index, maxLength}) => {
  const navigate= useNavigate()
  return (
    <div onClick={()=>{navigate(`/Chats/${userId}`)}}
      className={`w-full flex gap-4 py-2 px-4 items-center duration-150 justify-between border-b hover:bg-[#d3d1c2] border-b-[#c0bdad] group ${
        index === 0 && "rounded-t-xl"
      } ${index === maxLength - 1 && "border-b-0 rounded-b-xl"}`}
    >
      <div className="flex gap-4 items-center">
        <img src={image} alt="profile-picture" className="w-[3rem]" />
        <p className="font-thin select-none text-lg tracking-wide">
          {fname} {lname}
        </p>
      </div>
      <BsThreeDots
        size={24}
        className="invisible group-hover:delay-200 group-hover:visible text-[#5e5d53]"
      />
    </div>
  );
}

export default ChatUserIcon