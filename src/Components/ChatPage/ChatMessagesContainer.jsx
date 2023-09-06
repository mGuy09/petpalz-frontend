import React from 'react'
import ChatMessage from './ChatMessage'

const ChatMessagesContainer = () => {
  return (
    <div className="col-span-2 grid h-[45rem]">
          <div className="flex flex-col gap-10 px-5 my-8 overflow-y-scroll scroll">
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
          <div className="w-full flex justify-center items-center h-[5rem]">
            <textarea
              name=""
              id=""
              cols="10"
              rows="6"
              className="bg-gray-400 outline-none py-3 px-6 w-[95%] h-[75%] resize-none rounded-full"
                      ></textarea>
          </div>
        </div>
  )
}

export default ChatMessagesContainer