import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { IoIosSend } from 'react-icons/io'
import { HubConnectionBuilder } from '@microsoft/signalr'

const ChatMessagesContainer = () => {
  const [canSend, setCanSend] = useState(false)
  const InputChange = (e) => {
    if (e.target.value.length < 1) setCanSend(false)
    else setCanSend(true)
  }

  return (
    <div className="flex flex-col col-span-2 justify-end h-[45rem]">
      <div className="flex flex-col gap-10 h-full p-5 overflow-y-scroll scroll">
        {/* <ChatMessage
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
        /> */}

      </div>
      <div className=" flex justify-between items-center relative w-full h-[5rem] px-5 border-t-2 bg-[#c0bdad] border-t-[#c0bdad]">
        <input onChange={InputChange} type="text" placeholder='Message...' className={`chat-input bg-[#f1f0e1] placeholder:text-[#a7a38d] text-ellipsis focus-within:placeholder:text-transparent placeholder:duration-150 placeholder:delay-100 drop-shadow-md outline-none py-3 px-6 w-[95%] h-[65%] resize-none rounded-full ${canSend ? '' : 'w-full duration-200'}`} />
        <IoIosSend size={canSend ? 50 : 0} className={`p-2 hover:scale-[1.15] drop-shadow-md active:scale-105 duration-150 ml-3 rounded-full hover:bg-[#f7838d] text-white bg-[#e84855] ${canSend ? '' : 'scale-0 absolute right-[1.47rem]'}`} />
      </div>
    </div>
  )
}

export default ChatMessagesContainer