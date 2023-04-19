import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsExclamationCircle } from "react-icons/bs";

const SelectOptionTemplate = ({ name, id, optionList, callback, errorList, addError }) => {

  const GetValue = (e) => {
    if (e.target.value == null) {
      addError(["invalidService"]);
    } else {
      addError(["validService"]);
    }
    callback(parseInt(e.target.value));
  };
  return (
    <div className="w-full gap-3 flex">
      <select
        name={name}
        id={id}
        onInput={GetValue}
        className={`bg-[#fdfdf4] px-2 py-1 w-[30.65rem] 
        outline-none text-[#bbb8ac] duration-150
        hover:text-[#e84855] hover:border-[#e84855]
        focus:text-[#e84855] border-2 rounded-xl
        border-[#E0DDCF] focus:border-[#e84855]
        ${errorList.length > 0 ? 'w-[28.5rem]' : ''}`}
      >
        <option
          className="bg-[#dadad1] text-[#919188]"
          value=""
          disabled
          selected
        >
          Choose a service
        </option>
        {optionList.map((x) => (
          <option
            className="bg-[#fdfdf4] text-black"
            key={"service-" + x.id}
            value={x.id}
          >
            {x.name}
          </option>
        ))}
      </select>
      {errorList.includes('invalidService') ? (
        <BsExclamationCircle className="text-red-500 drop-shadow" size={23} />
      ) : errorList.includes('validService') ? (
        <IoMdCheckmarkCircleOutline
          className="text-green-600 drop-shadow"
          size={23}
        />
      ) : (
        <IoMdCheckmarkCircleOutline size={23} className="hidden" />
      )}
    </div>
  );
};

export default SelectOptionTemplate;
