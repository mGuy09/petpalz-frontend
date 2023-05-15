import React, { useEffect, useState } from "react";
import SelectOptionTemplate from "./SelectOptionTemplate";
import axios from "axios";
import { useNavigate } from "react-router";

const ADROwnerForm = ({ userType }) => {
  const [descriptionL, setDescriptionL] = useState(150);
  const [descriptionText, setDescription] = useState(null);
  const [serviceType, setServiceType] = useState();
  const [gender, setGender] = useState("");
  const [serviceOptions, setServiceOptions] = useState([]);
  const [errorList, setErrorList] = useState([]);

  console.log(userType, descriptionText, serviceType);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://localhost:7105/api/ServiceTypes", { withCredentials: true })
      .then((res) => {
        setServiceOptions(res.data);
      });
  }, []);

  const UpdateDescription = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setDescription(e.target.value);
    setDescriptionL(150 - e.target.value.length);
  };

  const GetGenderValue = (callback) => {
    setGender(callback === 0 ? "male" : callback === 1 && "female");
  };

  const GetValue = (callback) => {
    console.log(callback);
    setServiceType(callback);
  };

  const Submit = () => {
    if (serviceType == null) {
      setErrorList(["invalidService"]);
    } else {
      setErrorList(["validService"]);
    }
    if (errorList.includes("validService")) {
      axios
        .post(
          `https://localhost:7105/api/Users/AddUserRole`,
          {
            role: userType,
            qualificationIds: [],
            serviceTypeId: serviceType,
            description: descriptionText,
            yearsOfExperience: 0,
            gender: gender,
          },
          { withCredentials: true }
        )
        .then((res) => navigate("/pet-sitters&owners"));
    }
  };
  return (
    <div
      className={`top-[13%] left-[32%] flex absolute flex-col group items-center w-[45rem] h-[40rem] rounded-2xl py-10 duration-200 gap-10 bg-[#fdfdf4] shadow-xl shadow-black/30 scale-110 ${
        userType !== "petOwner" ? "hidden" : ""
      }`}
    >
      <div className="flex flex-col gap-4 w-full items-center">
        <h1 className="text-2xl font-medium text-[#e84855]">
          Pet Owner Details
        </h1>
        <div className="h-1 w-[60%] bg-[#e84855]"></div>
      </div>

      <div className="flex items-center w-[65%] gap-2">
        <p className="flex justify-center gap-2 text-[#e84855] drop-shadow-sm">
          <span className="font-bold text-xl">*</span>required fields
        </p>
      </div>
      <div>
        <SelectOptionTemplate
          name={"gender"}
          id={"gender-id"}
          callback={GetGenderValue}
          errorList={errorList}
          optionList={[
            { name: "male", id: 0 },
            { name: "female", id: 1 },
          ]}
          addError={setErrorList}
          invalid={"invalidGenderSelection"}
          valid={"validGenderSelection"}
        />
      </div>
      <div className="flex flex-col items-start gap-4">
        <p className="mx-2 text-[#77776f] font-medium">Description</p>
        <div className="relative">
          <textarea
            onInput={UpdateDescription}
            cols="60"
            rows="5"
            placeholder="Description"
            className="resize-none duration-200 placeholder:duration-200 bg-[#fdfdf4] border-2 placeholder-[#bbb8ac] border-[#E0DDCF] rounded-xl px-3 py-2 outline-none focus:border-[#e84855] hover:border-[#e84855] hover:placeholder-[#e84855] focus:placeholder-transparent focus:caret-[#e84855]"
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
        <div className="w-full">
          <SelectOptionTemplate
            name={"service"}
            id="service-id"
            optionList={serviceOptions.filter((x) => x.isForOwner)}
            placeholder="Service"
            callback={GetValue}
            errorList={errorList}
            addError={setErrorList}
          />
        </div>
      </div>
      <button
        onClick={Submit}
        className="border-2 border-[#e84855] hover:scale-110 duration-150 text-[#e84855] font-medium hover:text-white hover:bg-[#e84855] bg-[#fdfdf4] px-4 py-1 rounded-full"
      >
        Submit
      </button>
    </div>
  );
};

export default ADROwnerForm;
