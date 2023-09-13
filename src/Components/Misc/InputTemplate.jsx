import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsExclamationCircle } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const InputTemplate = ({
  Method,
  placeholder,
  type,
  errorList,
  invalid,
  valid,
  click,
  isPassword,
  isPhoneNumber,
  visible,
  showPassword,
  isLogin
}) => {

  if(isLogin) errorList = [];

  if (isPassword)
    return (
      <div className="flex gap-2 items-center">
        <div className="relative h-full">
          <input
            onInput={Method}
            type={visible ? "text" : type}
            placeholder={placeholder}
            className={`rounded-md px-3 py-1 w-full h-full bg-transparent outline-none duration-200 border-2  shadow-md shadow-black/5  ${
              click
                ? "border-[#E0DDCF] hover:text-black autofill:bg-[#fdfd1c] text-[#b4b1a2] isVisible focus:text-black bg-[#fdfdf4] placeholder-[#d3d0c2] hover:border-[#E84855]/100 hover:placeholder-[#E84855] caret-[#E84855] focus:placeholder-transparent placeholder:duration-200 focus:border-[#E84855]"
                : "border-white placeholder-white"
            }`}
          />
          {visible ? (
            <AiOutlineEyeInvisible
              className=" text-[#b4b1a2] absolute z-[1] hover:text-black right-[.50rem] duration-200 top-[.50rem]"
              size={20}
              onMouseDown={showPassword}
            />
          ) : (
            <AiOutlineEye
              className=" text-[#b4b1a2] absolute z-[1] hover:text-black right-[.50rem] duration-200 top-[.50rem]"
              size={20}
              onMouseDown={showPassword}
            />
          )}
        </div>
        {isLogin ? '' : errorList.includes(invalid) ? (
          <BsExclamationCircle className="text-red-500 drop-shadow" size={23} />
        ) : errorList.includes(valid) ? (
          <IoMdCheckmarkCircleOutline
            className="text-green-600 drop-shadow"
            size={23}
          />
        ) : (
          <IoMdCheckmarkCircleOutline size={23} className="invisible" />
        )}
        
      </div>
    );

  return (
    <div className={`flex gap-2 items-center ${isPhoneNumber ? "w-full" : ""}`}>
      <input
        onInput={Method}
        type={visible ? "text" : type}
        placeholder={placeholder}
        maxLength={isPhoneNumber && 10}
        className={`rounded-md bg-transparent outline-none px-3 py-1 duration-200 border-2  shadow-md shadow-black/5 ${
          isPhoneNumber ? "w-full appearance-none" : ""
        } ${
          click
            ? "border-[#E0DDCF] hover:text-black autofill:bg-[#fdfdf4] text-[#b4b1a2] focus:text-black bg-[#fdfdf4] placeholder-[#d3d0c2] hover:border-[#E84855]/100 hover:placeholder-[#E84855] caret-[#E84855] focus:placeholder-transparent placeholder:duration-200 focus:border-[#E84855]"
            : "border-white placeholder-white"
        }`}
      />
      {isLogin ? '' : errorList.includes(invalid) ? (
          <BsExclamationCircle className="text-red-500 drop-shadow" size={23} />
        ) : errorList.includes(valid) ? (
          <IoMdCheckmarkCircleOutline
            className="text-green-600 drop-shadow"
            size={23}
          />
        ) : (
          <IoMdCheckmarkCircleOutline size={23} className="invisible" />
        )}
    </div>
  );
};

export default InputTemplate;
