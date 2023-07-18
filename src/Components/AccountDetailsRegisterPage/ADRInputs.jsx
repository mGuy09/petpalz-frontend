import { Hint } from "@fisherwise/react-autocomplete-hint";
import React from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ADRInputs = ({ options, callback, errorList, valid, invalid }) => {
  const GetInput = (value) => {
    callback(value);
  };

  const GetInputEvent = (e) => {
    if (e.key === 'Enter' && e.target.value !== ''){
      callback({ id:null,label: e.target.value });
    }
  }

  return (
    <div className="flex w-full gap-3 items-center">
      <div className="w-full">
        <Hint
          options={options}
          onFill={GetInput}
          allowEnterFill
          allowTabFill
          hintColor="#d4a2a7"
        >
          <input
            type="text"
            onKeyUp={GetInputEvent}
            placeholder="Type a qualification"
            className="outline-none w-full px-2 py-1 border-2 border-[#E0DDCF] bg-[#fdfdf4] placeholder-[#d3d0c2] shadow-md shadow-black/5 rounded-md focus:border-[#e84855] hover:border-[#e84855] duration-150 focus:placeholder-[#e84855] hover:placeholder-[#e84855] placeholder:duration-150"
          />
        </Hint>
      </div>
      {errorList.includes(invalid) ? (
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

export default ADRInputs;
