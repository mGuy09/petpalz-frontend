import React, { useState } from "react";

const ADRSitterForm = ({ userType }) => {
  const [descriptionL, setDescriptionL] = useState(150);
  const [descriptionText, setDescription] = useState("");

  const UpdateDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
    setDescriptionL(150 - e.target.value.length);
  };
  return (
    <div
      className={`top-[13%] left-[32%] flex absolute flex-col group items-center w-[45rem] h-[40rem] rounded-2xl  justify-center duration-200 gap-14 bg-[#fdfdf4] shadow-xl shadow-black/30 scale-110 ${
        userType !== "petSitter" ? "hidden" : ""
      }`}
    >
      <div className="flex flex-col gap-4 w-full items-center">
        <h1 className="text-2xl font-medium text-[#e84855]">
          Pet Sitter Details
        </h1>
        <div className="h-1 w-[60%] bg-[#e84855]"></div>
      </div>

      <div className="flex items-center w-[65%] gap-2">
        <p className="flex items-center gap-2 text-[#e84855] drop-shadow-sm">
          <span className="font-bold text-xl">*</span> required fields
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <textarea
            onInput={UpdateDescription}
            cols="60"
            rows="5"
            placeholder="Description"
            className="resize-none duration-200 placeholder:duration-200 bg-[#fdfdf4] border-2 border-[#E0DDCF] rounded-xl px-3 py-2 outline-none focus:border-[#e84855] hover:border-[#e84855] hover:placeholder-[#e84855] focus:placeholder-transparent focus:caret-[#e84855]"
          ></textarea>
          <span className="absolute -bottom-4 left-1 text-sm font-medium text-[#77776f]">
            {descriptionL < 0
              ? "Should be enough"
              : descriptionL + " characters left"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ADRSitterForm;
