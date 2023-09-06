import React, { useEffect, useState } from "react";
import ChatUserIcon from "./ChatUserIcon";
import axios from "axios";

const ChatUserList = ({users}) => {
  return (
    <div className="col-span-1 flex flex-col gap-3 pl-4 pt-10 border-r-2 h-[45rem] w-full bg-[#f1f0e1] rounded-l-xl border-r-[#c0bdad]">
      
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
