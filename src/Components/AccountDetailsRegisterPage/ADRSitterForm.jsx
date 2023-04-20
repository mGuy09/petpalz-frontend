import React, { useEffect, useState } from "react";
import SelectOptionTemplate from "./SelectOptionTemplate";
import ADRInputs from "./ADRInputs";
import ADRQualificationTag from "./ADRQualificationTag";

const ADRSitterForm = ({ userType }) => {
  const [descriptionL, setDescriptionL] = useState(150);
  const [descriptionText, setDescription] = useState("");
  const [serviceType, setServiceType] = useState();
  const [qualificationIds, setQualificationIds] = useState([])
  const [errorList, setErrorList] = useState([]);
  const options = [{id:0,name:'orange'},{id:1,name:'egg'},{id:2,name:'potato'},{id:3,name:'chicken'}]

  const UpdateDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
    setDescriptionL(150 - e.target.value.length);
  };

  const RemoveQualification = (callback) => {
    setQualificationIds(qualificationIds.filter(x => x !== callback))
  }

  const GetValue = (callback) => {
    console.log(callback);
    setServiceType(callback);
  };

  const GetQualification = (callback) => {
    if (!qualificationIds.includes(callback.id)) {
      setQualificationIds((prev) => [...prev, callback.id])
    }
  }
  return (
    <div
      className={`top-[13%] left-[32%] flex absolute flex-col group items-center w-[45rem] h-[60rem] rounded-2xl  justify-center duration-200 gap-14 bg-[#fdfdf4] shadow-xl shadow-black/30 scale-110 ${
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
            className="resize-none duration-200 placeholder:duration-200 bg-[#fdfdf4] border-2 border-[#E0DDCF] placeholder-[#bbb8ac] rounded-xl px-3 py-2 outline-none focus:border-[#e84855] hover:border-[#e84855] hover:placeholder-[#e84855] focus:placeholder-transparent focus:caret-[#e84855]"
          ></textarea>
          <span className="absolute -bottom-4 left-1 text-sm font-medium text-[#77776f]">
            {descriptionL < 0
              ? "Should be enough"
              : descriptionL + " characters left"}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 w-[68%]">
        <p className="mx-2 flex justify-center gap-2 text-[#77776f] font-medium">
          <span className="text-[#e84855] text-xl font-bold">*</span>Service
        </p>
        <div>
          <SelectOptionTemplate
            name={"service"}
            id="service-id"
            optionList={[
              { id: 0, name: "Serviciul1" },
              { id: 1, name: "Serviciul2" },
            ]}
            placeholder="Service"
            callback={GetValue}
            errorList={errorList}
            addError={setErrorList}
          />
        </div>
      </div>

      <div className="w-[68%] flex flex-col items-start gap-4 justify-center">
        <p className="mx-2 flex justify-center gap-2 text-[#77776f] font-medium">
          <span className="text-[#e84855] text-xl font-bold">*</span>
          Qualifications
        </p>
        <ADRInputs
          options={options.map((x) => {
            return { id: x.id, label: x.name };
          })}
          callback={GetQualification}
        />
      </div>
      <div className="flex border-b-2 border-b-[#E0DDCF] pb-10 w-[68%] justify-center gap-4">
        {qualificationIds.map((x) => (
          <ADRQualificationTag
            callback={RemoveQualification}
            qualification={options.filter((y) => y.id === x)[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default ADRSitterForm;
