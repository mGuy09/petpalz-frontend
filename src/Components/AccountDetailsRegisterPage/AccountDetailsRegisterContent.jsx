import React, { useState } from "react";
import ADROwnerForm from "./ADROwnerForm";
import ADRSitterForm from "./ADRSitterForm";

const AccountDetailsRegisterContent = () => {
  const [userType, setUserType] = useState("");
  const [serviceType, setServiceType] = useState()
  const [qualifications, setQualifications] = useState([])

  console.log(userType)

  
  return (
    <div
      className={`relative ${
        userType === "petOwner"
          ? "h-[100vh]"
          : userType === "petSitter"
          ? "h-[130vh]"
          : "h-screen"
      }`}
    >
      <div className="absolute bg-gradient-to-br w-full h-full from-[#DE7C5A] via-[#f56363] to-[#742d33]"></div>

      {/* ////////////////////////////////////////////////////// */}
      {/* The beginning of the form */}
      {/* ////////////////////////////////////////////////////// */}

      <div
        className={`top-[13%] left-[32%] flex absolute flex-col group items-center w-[45rem] h-[40rem] rounded-2xl  justify-center duration-200 gap-14 bg-[#fdfdf4] shadow-xl shadow-black/30 scale-110 ${
          userType !== "" ? "hidden" : ""
        }`}
      >
        <div className={`flex flex-col gap-5 items-center w-full`}>
          <h1 className="text-2xl font-medium text-[#e84855]">
            What type of account do you want
          </h1>
          <div className="w-[60%] h-1 bg-[#e84855]"></div>
        </div>
        <div className="flex gap-10 w-full items-center justify-center">
          <button
            onMouseDown={() => {
              setUserType("petOwner");
            }}
            className="border-2 px-10 py-8 border-[#e84855] text-xl font-semibold text-[#e84855] hover:text-white hover:bg-[#e84855] duration-200 hover:scale-[1.07] active:bg-[#85252d] active:scale-105 rounded-xl active:border-[#85252d] active:text-white"
          >
            Pet Owner
          </button>
          <button
            onMouseDown={() => {
              setUserType("petSitter");
            }}
            className="border-2 px-10 py-8 border-[#e84855] text-xl font-semibold text-[#e84855] hover:text-white hover:bg-[#e84855] duration-200 hover:scale-[1.07] active:bg-[#85252d] active:scale-105 rounded-xl active:border-[#85252d] active:text-white"
          >
            Pet Sitter
          </button>
        </div>
      </div>

      {/* ////////////////////////////////////////////////////// */}
      {/* The pet owner part */}
      {/* ////////////////////////////////////////////////////// */}

      <ADROwnerForm userType={userType}/>

      {/* ////////////////////////////////////////////////////// */}
      {/* The pet sitter part */}
      {/* ////////////////////////////////////////////////////// */}

      <ADRSitterForm userType={userType}/>
    </div>
  );
};

export default AccountDetailsRegisterContent;
