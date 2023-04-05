import React, { useState } from "react";
import { FaArrowRight, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginContent = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="relative h-[100vh]">
      <div className="absolute  bg-gradient-to-br w-full h-full from-[#DE7C5A] via-[#f56363] to-[#742d33]"></div>
      <div
        onClick={() => setClick(true)}
        className={`top-[13%] left-[32%] flex absolute flex-col group items-center w-[45rem] h-[40rem] rounded-2xl  justify-center duration-200 gap-14  ${
          click
            ? "bg-[#fafafa] shadow-xl shadow-black/30 scale-110"
            : "bg-black/30"
        }`}
      >
        <div className="flex flex-col gap-4 items-center">
          <h1
            className={`text-3xl font-medium  duration-200 ${
              click ? "text-[#E84855] drop-shadow-md" : "text-white"
            }`}
          >
            Sign In
          </h1>
          <div
            className={`w-[12rem] h-[.20rem] rounded-full  ${
              click ? "bg-[#e84855] drop-shadow-md" : "bg-white"
            }`}
          ></div>
        </div>
        <div className="flex gap-4">
          <button
            className={`border-2 text-white p-2 shadow-md shadow-black/5 duration-200 rounded-full  ${
              click
                ? "bg-sky-600 hover:bg-sky-800 border-transparent"
                : "border-white"
            }`}
          >
            <FaFacebookF size={25} className={`drop-shadow`} />
          </button>
          <button
            className={`border-2  p-2 shadow-md shadow-black/5 duration-200 rounded-full text-white ${
              click
                ? "bg-red-600 hover:bg-red-800 border-transparent"
                : "border-white"
            }`}
          >
            <FaGoogle size={25} className={`drop-shadow`} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Username"
            className={`rounded-md outline-none px-3 py-1 duration-200 border-2  shadow-md shadow-black/5  ${
              click
                ? "border-[#b6b3a8]  bg-white placeholder-[#d3d0c2] hover:border-[#E84855]/100 hover:placeholder-[#E84855] caret-[#E84855] focus:placeholder-[#E84855]/0 placeholder:duration-200 focus:border-[#E84855]/100"
                : "border-white bg-transparent placeholder-white"
            }`}
          />
          <input
            type="text"
            placeholder="Password"
            className={`rounded-md outline-none px-3 py-1 duration-200 border-2 shadow-md shadow-black/5 ${
              click
                ? "border-[#b6b3a8]  bg-white/100  placeholder-[#d3d0c2] hover:border-[#E84855]/100 hover:placeholder-[#E84855] caret-[#E84855] focus:placeholder-[#E84855]/0 placeholder:duration-200 focus:border-[#E84855]/100"
                : "border-white placeholder-white bg-transparent"
            }`}
          />
          <Link
            to={""}
            className={`duration-200 font-medium ${
              click
                ? "text-[#E84855] hover:text-[#f56a76] active:text-[#aa333c]"
                : "text-white"
            }`}
          >
            Forgot your password?
          </Link>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <button
            className={`flex gap-2 items-center px-4 py-2 font-medium border-2 duration-200 rounded-full  shadow-md shadow-black/5  ${
              click
                ? "text-[#E84855] border-[#E84855] hover:bg-[#E84855] hover:text-white "
                : "text-white border-white"
            }`}
          >
            Sign In <FaArrowRight size={20} />
          </button>
          <Link
            to={"/Register"}
            className={` duration-200 font-medium ${
              click
                ? "text-[#E84855] hover:text-[#f56a76] active:text-[#aa333c]"
                : "text-white"
            }`}
          >
            Don't have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
