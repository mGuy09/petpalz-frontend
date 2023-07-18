import React from "react";
import ChatUserList from "./ChatUserList";
import ChatUser from "./ChatUser";
import ChatMessage from "./ChatMessage";
import { IoIosSend, IoMdSend } from "react-icons/io";

const ChatContent = () => {
  return (
    <div className="bg-[#c0bdad]  flex items-center justify-center h-[100vh] w-full">
      <div className="bg-white w-[90rem] h-[45rem] rounded-xl shadow-lg shadow-[#868475]/80 grid grid-cols-4">
        <ChatUserList />
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
        <ChatUser />
      </div>
    </div>
  );
};

export default ChatContent;
