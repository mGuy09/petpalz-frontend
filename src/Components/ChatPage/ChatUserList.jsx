import React, { useEffect, useState } from "react";
import ChatUserIcon from "./ChatUserIcon";
import axios from "axios";
import { useParams } from "react-router";

const ChatUserList = ({users}) => {
  const params = useParams()
  return (
    <div className="col-span-1 flex flex-col gap-3 pl-4 border-r-2 h-[45rem] w-full bg-[#f1f0e1] rounded-l-xl border-r-[#c0bdad]">
      
      <div className="overflow-y-scroll h-full pt-10">
        {users.map((x, i) => (
          <ChatUserIcon
            userId={x.id}
            image={x.profilePicUrl}
            fname={x.firstName}
            lname={x.lastName}
            index={i}
            maxLength={users.length}
            selected={params.chatId === x.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatUserList;
