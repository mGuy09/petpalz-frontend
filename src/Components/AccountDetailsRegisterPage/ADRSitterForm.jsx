import React, { useEffect, useState } from "react";
import SelectOptionTemplate from "./SelectOptionTemplate";
import InputTemplate from "../Misc/InputTemplate";
import ADRInputs from "./ADRInputs";
import ADRQualificationTag from "./ADRQualificationTag";
import axios from "axios";
import { useNavigate } from "react-router";

const ADRSitterForm = ({ userType }) => {
  const [descriptionL, setDescriptionL] = useState(150);
  const [descriptionText, setDescription] = useState("");
  const [serviceType, setServiceType] = useState();
  const [qualificationIds, setQualificationIds] = useState([]);
  const [errorList, setErrorList] = useState([]);
  const [options, setOptions] = useState([]);
  const [optionsChanged, setOptionsChanged] = useState(false);
  const [gender, setGender] = useState('')
  const [serviceOptions, setServiceOptions] = useState([]);
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://localhost:7105/api/Qualifications", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data, qualificationIds);
        setOptions(res.data);
      });
  }, [optionsChanged, qualificationIds]);

  useEffect(() => {
    axios
      .get("https://localhost:7105/api/ServiceTypes", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setServiceOptions(res.data);
      });
  }, []);

  const UpdateDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
    setDescriptionL(150 - e.target.value.length);
  };

  const UpdateYoE = (e) => {
    e.preventDefault();
    console.log(e);
    setYearsOfExperience(e.target.value);
  };

  const RemoveQualification = (callback) => {
    setQualificationIds(qualificationIds.filter((x) => x !== callback));
  };

  const GetGenderValue = (callback) => {
    setGender(callback === 0 ? 'male' : callback === 1 && 'female')
  }

  const GetValue = (callback) => {
    console.log(callback);
    setServiceType(callback);
  };
  const VerifyQualification = (callback) => {
    for (let i = 0; i < options.length; i++) {
      if (options[i].name.toLowerCase() === callback) {
        return false;
      }
    }
    return true;
  };
  const GetQualification = (callback) => {
    if (VerifyQualification(callback.label.toLowerCase())) {
      axios
        .post(
          "https://localhost:7105/api/Qualifications",
          {
            name: callback.label,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (!qualificationIds.includes(res.data.id)) {
            axios
              .get("https://localhost:7105/api/Qualifications", {
                withCredentials: true,
              })
              .then((res) => {
                console.log(res.data);
                setOptions(res.data);
              })
              .then((r) => {
                setQualificationIds((prev) => [...prev, res.data.id]);
                setOptionsChanged(!optionsChanged);
              });
          }
        });
    } else if (
      !qualificationIds.includes(callback.id || callback.id !== null)
    ) {
      setQualificationIds((prev) => [...prev, callback.id]);
    }
  };

  useEffect(() => {
    if (yearsOfExperience === "") {
      setErrorList((prev) => [
        ...prev.filter((x) => x !== "validYoE"),
        "invalidYoE",
      ]);
    } else {
      setErrorList((prev) => [
        ...prev.filter((x) => x !== "invalidYoE"),
        "validYoE",
      ]);
    }
    if (qualificationIds.length === 0) {
      setErrorList((prev) => [
        ...prev.filter((x) => x !== "validQualifications"),
        "invalidQualifications",
      ]);
    } else {
      setErrorList((prev) => [
        ...prev.filter((x) => x !== "invalidQualifications"),
        "validQualifications",
      ]);
    }
  }, [qualificationIds, yearsOfExperience]);

  const CanSubmit = () => {
    if (
      errorList.includes("invalidQualifications") ||
      errorList.includes("invalidService") ||
      errorList.includes("invalidYoE") || errorList.includes("invalidGenderSelection") || errorList.length === 0
    ) {
      return false;
    }
    return true;
  };

  const Submit = () => {
    if (CanSubmit) {
      axios
        .post(
          `https://localhost:7105/api/Users/AddUserRole`,
          {
            role: userType,
            qualificationIds: qualificationIds,
            serviceTypeId: serviceType,
            description: descriptionText,
            yearsOfExperience: yearsOfExperience,
            gender: gender
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res)
          navigate("/pet-sitters&owners")
        });
    }
  };

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
      <div>
        <SelectOptionTemplate name={"gender"} id={"gender-id"} callback={GetGenderValue} errorList={errorList}optionList={[{name:"male", id:0}, {name:"female", id:1}]}addError={setErrorList} invalid={'invalidGenderSelection'} valid={'validGenderSelection'}/>
      </div>
      <div className="flex flex-col gap-4">
        <p className="mx-2 text-[#77776f] font-medium">Description</p>
        <div className="relative">
          <textarea
            onInput={UpdateDescription}
            cols="60"
            rows="5"
            placeholder="Description"
            className="resize-none duration-200 placeholder:duration-200 shadow-md shadow-black/5 bg-[#fdfdf4] border-2 border-[#E0DDCF] placeholder-[#d3d0c2] rounded-md px-3 py-2 outline-none focus:border-[#e84855] hover:border-[#e84855] hover:placeholder-[#e84855] focus:placeholder-transparent focus:caret-[#e84855]"
          ></textarea>
          <span className="absolute -bottom-4 left-1 text-sm font-medium text-[#77776f]">
            {descriptionL < 0
              ? "Should be enough"
              : descriptionL + " characters left"}
          </span>
        </div>
      </div>

      <div className="flex items-start gap-4 w-[68%]">
        <div className="w-full">
          <p className=" flex  gap-2 text-[#77776f] font-medium">
            <span className="text-[#e84855] text-xl font-bold">*</span>Service
          </p>
          <div className="w-full">
            <SelectOptionTemplate
              name={"service"}
              id="service-id"
              optionList={serviceOptions.filter((x) => !x.isForOwner)}
              placeholder="Service"
              callback={GetValue}
              errorList={errorList}
              addError={setErrorList}
              valid={'validService'}
              invalid={'invalidService'}
            />
          </div>
        </div>
        <div className="w-full">
          <p className=" flex  gap-2 text-[#77776f] font-medium">
            <span className="text-[#e84855] text-xl font-bold">*</span>
            Years of Experience
          </p>
          <InputTemplate
            click={true}
            errorList={errorList}
            isPassword={false}
            isPhoneNumber={false}
            type={"number"}
            placeholder={"Years of Experience"}
            visible={false}
            Method={UpdateYoE}
            invalid={"invalidYoE"}
            valid={"validYoE"}
          />
        </div>
      </div>

      <div className="w-[68%] flex flex-col items-start gap-4">
        <p className="mx-2 flex justify-center gap-2 text-[#77776f] font-medium">
          <span className="text-[#e84855] text-xl font-bold">*</span>
          Qualifications
        </p>
        <ADRInputs
          options={options.map((x) => {
            return { id: x.id, label: x.name };
          })}
          callback={GetQualification}
          errorList={errorList}
          addError={setErrorList}
          invalid={"invalidQualifications"}
          valid={"validQualifications"}
        />
      </div>
      <div
        className={`flex pb-10 w-[68%] flex-wrap justify-center gap-4 ${
          qualificationIds.length > 0 ? "border-b-2 border-b-[#E0DDCF]" : ""
        }`}
      >
        {qualificationIds.map((x) => (
          <ADRQualificationTag
            callback={RemoveQualification}
            qualification={options.filter((y) => y.id === x)[0]}
          />
        ))}
      </div>

      <button
        onClick={Submit}
        className="border-2 border-[#e84855] active:border-[#a8333d] active:scale-105 active:bg-[#a8333d] hover:scale-110 duration-150 text-[#e84855] font-medium hover:text-white hover:bg-[#e84855] bg-[#fdfdf4] px-4 py-1 rounded-full"
      >
        Submit
      </button>
    </div>
  );
};

export default ADRSitterForm;
