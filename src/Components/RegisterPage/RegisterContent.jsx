import React, { useState } from "react";
import { FaArrowRight, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterContent = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="relative h-[100vh]">
      <div className="absolute  bg-gradient-to-br w-full h-full from-[#DE7C5A] via-[#f56363] to-[#742d33]"></div>
      <div
        onClick={() => setClick(true)}
        className={`top-[13%] left-[32%] flex absolute flex-col group items-center w-[45rem] h-[45rem] rounded-2xl  justify-center duration-200 gap-14  ${
          click
            ? "bg-[#fafafa] shadow-xl shadow-black/30 scale-110"
            : "bg-black/30"
        }`}
      >
        <div className="flex flex-col gap-4 items-center">
          <h1
            className={`text-3xl font-medium duration-200 ${
              click ? "text-[#E84855]/100 drop-shadow-md" : "text-white"
            }`}
          >
            Sign Up
          </h1>
          <div
            className={`w-[12rem] h-[.20rem] rounded-full  ${
              click ? "bg-[#e84855] drop-shadow-md" : "bg-white"
            }`}
          ></div>
        </div>
        <div className="flex gap-4">
          <button
            className={`border-2  p-2 shadow-md shadow-black/5 duration-200 rounded-full text-white ${
              click
                ? "bg-sky-600 hover:bg-sky-800 border-white/0"
                : "border-white"
            }`}
          >
            <FaFacebookF size={25} className={`drop-shadow`} />
          </button>
          <button
            className={`border-2 border-white p-2 shadow-md shadow-black/5 duration-200 rounded-full text-white ${
              click
                ? "bg-red-600 hover:bg-red-800 border-white/0 hover:text-white"
                : ""
            }`}
          >
            <FaGoogle size={25} className={`drop-shadow`} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="First Name"
              className={`rounded-md bg-transparent outline-none px-3 py-1 duration-200 border-2  shadow-md shadow-black/5  ${
                click
                  ? "border-[#E0DDCF]  bg-white placeholder-[#d3d0c2] hover:border-[#E84855]/100 hover:placeholder-[#E84855] caret-[#E84855] focus:placeholder-transparent placeholder:duration-200 focus:border-[#E84855]"
                  : "border-white placeholder-white"
              }`}
            />
            <input
              type="text"
              placeholder="Last Name"
              className={`rounded-md bg-transparent outline-none px-3 py-1 duration-200 border-2  shadow-md shadow-black/5  ${
                click
                  ? "border-[#E0DDCF]  bg-white placeholder-[#d3d0c2] hover:border-[#E84855]/100 hover:placeholder-[#E84855] caret-[#E84855] focus:placeholder-transparent placeholder:duration-200 focus:border-[#E84855]"
                  : "border-white placeholder-white"
              }`}
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Username"
              className={`rounded-md bg-transparent outline-none px-3 py-1 duration-200 border-2  shadow-md shadow-black/5  ${
                click
                  ? "border-[#E0DDCF]  bg-white placeholder-[#d3d0c2] hover:border-[#E84855]/100 hover:placeholder-[#E84855] caret-[#E84855] focus:placeholder-transparent placeholder:duration-200 focus:border-[#E84855]"
                  : "border-white placeholder-white"
              }`}
            />
            <input
              type="text"
              placeholder="Email Address"
              className={`rounded-md bg-transparent outline-none px-3 py-1 duration-200 border-2  shadow-md shadow-black/5  ${
                click
                  ? "border-[#E0DDCF]  bg-white placeholder-[#d3d0c2] hover:border-[#E84855]/100 hover:placeholder-[#E84855] caret-[#E84855] focus:placeholder-transparent placeholder:duration-200 focus:border-[#E84855]"
                  : "border-white placeholder-white"
              }`}
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Password"
              className={`rounded-md bg-transparent outline-none px-3 py-1 duration-200 border-2  shadow-md shadow-black/5  ${
                click
                  ? "border-[#E0DDCF]  bg-white placeholder-[#d3d0c2] hover:border-[#E84855]/100 hover:placeholder-[#E84855] caret-[#E84855] focus:placeholder-transparent placeholder:duration-200 focus:border-[#E84855]"
                  : "border-white placeholder-white"
              }`}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className={`rounded-md bg-transparent outline-none px-3 py-1 duration-200 border-2  shadow-md shadow-black/5  ${
                click
                  ? "border-[#E0DDCF]  bg-white placeholder-[#d3d0c2] hover:border-[#E84855]/100 hover:placeholder-[#E84855] caret-[#E84855] focus:placeholder-transparent placeholder:duration-200 focus:border-[#E84855]"
                  : "border-white placeholder-white"
              }`}
            />
          </div>
          <Link
            to={"/Login"}
            className={` duration-200 font-medium ${
              click
                ? "text-[#E84855] hover:text-[#f56a76] active:text-[#aa333c]"
                : "text-white"
            }`}
          >
            Already got an account?
          </Link>
        </div>
        <button
          className={`flex gap-2 items-center px-4 py-2 font-medium border-2 duration-200 rounded-full  shadow-md shadow-black/5  ${
            click
              ? "text-[#E84855] border-[#E84855] hover:bg-[#E84855] "
              : "text-white border-white"
          }`}
        >
          Sign Up <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default RegisterContent;
