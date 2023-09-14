import React from 'react'
import { useNavigate } from 'react-router'
import SNOQualificationTag from '../SitterAndOwnersPage/SNOQualificationTag'

const ChatUser = ({user,}) => {
  const navigate = useNavigate()
  
  if(user)
  return (
    <div className='flex flex-col items-center justify-start rounded-r-xl gap-5 py-5 px-10 col-span-1 h-[45rem] border-l-2 border-l-[#c0bdad] scroll-smooth overflow-y-scroll bg-[#f1f0e1]'>
      <div onMouseUp={()=>navigate('/profile/'+user.userName)} className='relative group cursor-pointer'>
      <img src={user.profilePicUrl} alt="" className='flex w-[15rem] border-[3px] drop-shadow-md group-hover:scale-105 group-active:scale-100 duration-150 rounded-full bg-[#c0bdad] border-[#c0bdad]'/>
      <div className='absolute flex items-center justify-center group-hover:bg-white/50 right-0  group-hover:scale-105 group-active:scale-100 duration-150 top-0 w-full h-full rounded-full'><p className='font-medium select-none group-hover:text-black/100 drop-shadow-md text-2xl text-transparent duration-150 '>View Profile</p></div>
      </div>
      <div className='flex items-center flex-col gap-1'>
      <p className='font-light text-2xl drop-shadow-md'>{user.firstName} {user.lastName}</p>
      <p className='font-medium underline underline-offset-2'>{user.serviceType.name}</p>
      </div>
      {user.qualifications ?
         <div className="flex gap-3 mt-10 justify-center flex-wrap">
          {user.qualifications.map((x) => (
            <SNOQualificationTag
              QualificationId={x.id}
              QualificationName={x.name}
            />
          ))}
        </div>
      : ''}
      <div className='w-full h-1 bg-[#c0bdad] mt-5 rounded-full'></div>
      <p className='font-light text-xl mt-5 drop-shadow-md'>{user.description}</p>
      <div className='flex gap-3 mt-7'>
      <p className='font-light drop-shadow-md text-lg'>Phone Number:</p>
      <p className='font-medium drop-shadow-md text-lg underline underline-offset-2 hover:text-sky-500 duration-150 cursor-pointer'>{user.phoneNumber}</p>
      </div>
    </div>
  )
  else return (
    <div className='flex flex-col items-center justify-start rounded-r-xl col-span-1 h-[45rem] border-l-2 border-l-[#c0bdad] bg-[#f1f0e1]'>
      <p>No User Selected</p>
    </div>
  )
}

export default ChatUser