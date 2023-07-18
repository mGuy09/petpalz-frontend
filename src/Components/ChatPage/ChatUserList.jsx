import React from "react";
import ChatUserIcon from "./ChatUserIcon";
import { AiOutlinePlus } from "react-icons/ai";

const ChatUserList = () => {
    const users = [
      {
        image: "https://i.ibb.co/0JGWD44/user-male.png",
        fname: "Andrei",
        lname: "Tudor",
      },
      {
        image: "https://i.ibb.co/0JGWD44/user-male.png",
        fname: "Gabriel",
        lname: "Raicu",
      },
      {
        image: "https://i.ibb.co/0JGWD44/user-male.png",
        fname: "Adriana",
        lname: "Calin",
      },
      {
        image: "https://i.ibb.co/0JGWD44/user-male.png",
        fname: "Alina",
        lname: "Ofiteru",
      },
      {
        image: "https://i.ibb.co/0JGWD44/user-male.png",
        fname: "Vasile",
        lname: "Popescu",
      },
      {
        image: "https://i.ibb.co/0JGWD44/user-male.png",
        fname: "Gigel",
        lname: "Frone",
      },
    ];
  return (
    <div className="col-span-1 flex flex-col gap-3 pl-4 pt-10 border-r-2 h-[45rem] w-full bg-[#f1f0e1] rounded-l-xl border-r-[#c0bdad]">
      <div className=" pb-6">
        <button className="flex gap-[.3rem] border-2 border-[#E84855] text-[#E84855] rounded-xl px-2 py-1 items-center font-medium duration-150 hover:bg-[#E84855] hover:text-white active:bg-[#a32d37] active:text-white active:border-[#a32d37]">
          <AiOutlinePlus size={24} /> New Chat
        </button>
      </div>
      <div className="overflow-y-scroll h-full">
        {users.map((x, i) => (
          <ChatUserIcon
            image={x.image}
            fname={x.fname}
            lname={x.lname}
            index={i}
            maxLength={users.length}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatUserList;
