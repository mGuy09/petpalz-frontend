import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

const ChatMessage = ({ message, senderId, deliverDate, image, testIsMe }) => {
  if (!testIsMe)
    return (
      <div className="flex gap-2 float-left">
        <img src={image} alt="" className="w-[3.5rem] drop-shadow-md h-[3.5rem]" />
        <div className="flex flex-col gap-2">
          <div className="bg-[#f1f0e1] px-4 drop-shadow-md py-2 rounded-xl whitespace-pre-wrap max-w-[20rem]">
            <p className="">{message}</p>
          </div>
          <p className="flex gap-1 items-center text-sm text-gray-500">
            <AiOutlineClockCircle size={14} /> 22:00
          </p>
        </div>
      </div>
        );
    return (
      <div className="flex gap-2 float-right flex-row-reverse">
        <img src={image} alt="" className="w-[3.5rem] drop-shadow-md h-[3.5rem]" />
        <div className="flex flex-col gap-2">
          <div className="bg-[#e84855] text-white px-4 drop-shadow-md py-2 rounded-xl whitespace-pre-wrap max-w-[20rem]">
            <p className="">{message}</p>
          </div>
          <p className="flex gap-1 items-center justify-end text-sm text-gray-500">
            <AiOutlineClockCircle size={14} /> 22:00
          </p>
        </div>
      </div>
    );
  // return (
  //     <div className=''>

  //     <div
  //       className={`flex flex-col tracking-wide ${
  //         testIsMe ? "bg-[#e84855] text-white" : "bg-[#f1f0e1]"
  //       }`}
  //     >
  //       <p className="">{message}</p>
  //       <p>{deliverDate}</p>
  //     </div>
  //   </div>
  // );
};

export default ChatMessage;
