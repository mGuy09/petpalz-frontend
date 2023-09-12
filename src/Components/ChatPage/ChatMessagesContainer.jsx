import React from 'react'
import ChatMessage from './ChatMessage'
import { IoIosSend } from 'react-icons/io'
import { HubConnectionBuilder } from '@microsoft/signalr'

const ChatMessagesContainer = () => {
HubConnectionBuilder

  return (
    <div className="col-span-2 grid h-[45rem]">
      <div className="flex flex-col gap-10 px-5 py-3 my-3 overflow-y-scroll scroll">
        <ChatMessage
          message={
            "hisdbgisuhi idfhgi dhih cvbhkjdhkgjhdfkg fdsjbfjhb shdbfj hbsjdfh bjsdf "
          }
          testIsMe={false}
          image={"https://i.ibb.co/0JGWD44/user-male.png"}
        />
        <ChatMessage
          message={
            "hisdbgisuhi idfhgi dhih cvbhkjdhkgjhdfkg fjdshf jdsfh khsdfkh"
          }
          testIsMe={true}
          image={"https://i.ibb.co/0JGWD44/user-male.png"}
        />
        <ChatMessage
          message={
            "hisdbgisuhi idfhgi dhih cvbhkjdhkgjhdfkg fdsjbfjhb shdbfj hbsjdfh bjsdf "
          }
          testIsMe={false}
          image={"https://i.ibb.co/0JGWD44/user-male.png"}
        />
        <ChatMessage
          message={
            "hisdbgisuhi idfhgi dhih cvbhkjdhkgjhdfkg fdsjbfjhb shdbfj hbsjdfh bjsdf "
          }
          testIsMe={false}
          image={"https://i.ibb.co/0JGWD44/user-male.png"}
        />
        <ChatMessage
          message={
            "hisdbgisuhi idfhgi dhih cvbhkjdhkgjhdfkg fjdshf jdsfh khsdfkh"
          }
          testIsMe={true}
          image={"https://i.ibb.co/0JGWD44/user-male.png"}
        />
      </div>
      <div className=" flex justify-center items-center w-full h-[5rem] px-5 border-t-2 bg-[#c0bdad] border-t-[#c0bdad]">
        <input type="text" placeholder='Message...' className='bg-[#f1f0e1] placeholder:text-[#a7a38d] text-ellipsis  drop-shadow-md outline-none py-3 px-6 w-[95%] h-[65%] resize-none rounded-full' />
        <div className='p-2 hover:scale-[1.15] drop-shadow-md active:scale-105 duration-150 ml-3 rounded-full text-white bg-[#e84855]'> <IoIosSend size={35} /> </div>
      </div>
    </div>
  )
}

export default ChatMessagesContainer