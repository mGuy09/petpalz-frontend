import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsExclamationCircle } from "react-icons/bs";

const SelectOptionTemplate = ({ name, id, optionList, callback, errorList, addError, valid, invalid }) => {

  const GetValue = (e) => {
    if (e.target.value == null) {
      addError((prev) => [...prev.filter(x => x!== valid),invalid]);
    } else {
      addError((prev) => [
        ...prev.filter((x) => x !== invalid),
        valid
      ]);
    }
    callback(parseInt(e.target.value));
  };
  return (
    <div className="w-full gap-3 flex">
      <div className="w-full">
        <select
          name={name}
          id={id}
          onInput={GetValue}
          className={`bg-[#fdfdf4] px-2 py-1 w-full 
        outline-none text-[#d3d0c2] duration-150
        shadow-md shadow-black/5
        hover:text-[#e84855] hover:border-[#e84855]
        focus:text-[#e84855] border-2 rounded-md
        border-[#E0DDCF] focus:border-[#e84855]`}
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
      </div>
      {errorList.includes("invalidService") ? (
        <BsExclamationCircle className="text-red-500 drop-shadow" size={23} />
      ) : errorList.includes("validService") ? (
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
