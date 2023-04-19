import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle, FaCog, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { useAtom } from "jotai";
import { Authenticated } from "../../StateManagement/State";

const Navbar = () => {
  const [isOpen, setOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = useAtom(Authenticated)
  const OpenClose = () => {
    setOpen(!isOpen);
  };
  const location = useLocation().pathname;

  if (
    location === "/register" ||
    location === "/login" ||
    location === "/Register" ||
    location === "/Login" ||
    location === "/create-profile" ||
    location === "/Create-profile"
  )
    return null;

  return (
    <div>
      {/* Backdrop */}

      <div
        onClick={OpenClose}
        className={`fixed w-full h-screen bg-black/60 z-20 backdrop-blur-sm visible duration-300 transition-all ${
          !isOpen ? "bg-white/0 backdrop-blur-0 invisible" : ""
        }`}
      ></div>

      {/* Sidebar */}

      <div
        className={`h-screen fixed w-[20%] flex-col py-5 z-30 -right-0 bg-[#F1F0EA] duration-500 ${
          !isOpen && "translate-x-[100%]"
        }`}
      >
        <div className="flex justify-around items-center ">
          <Link to={"/"} className="mx-5 mb-[0.90rem] w-[13%]">
            <img src="https://i.ibb.co/2nMgm1V/heart.png" alt="" />
          </Link>
          <div
            onClick={OpenClose}
            className="group relative flex rounded-full justify-end w-full mb-12 mt-0 p-2 h-3"
          >
            <HiMenuAlt3
              size={27}
              className="scale-100 absolute group-hover:scale-0 transition-all"
            />
            <AiOutlineClose
              size={27}
              className="scale-0 absolute group-hover:scale-100 transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col h-[95%] justify-between">
          <ul className="w-full border-t border-t-[#c4c0b1]">
            <Link to={"/"}>
              <li
                onClick={OpenClose}
                className="px-5 py-3 border-b cursor-pointer border-[#c4c0b1] w-full hover:bg-[#E84855] text-lg transition-all hover:text-white font-medium duration-150 "
              >
                Home
              </li>
            </Link>
            <Link to={"/pet-sitters&owners"}>
              <li
                onClick={OpenClose}
                className="px-5 py-3 border-b cursor-pointer border-[#c4c0b1] w-full hover:bg-[#E84855] text-lg transition-all hover:text-white font-medium duration-150 "
              >
                Pet Sitters & Owners
              </li>
            </Link>
            <Link to={"/about-us"}>
              <li
                onClick={OpenClose}
                className="px-5 py-3 border-b cursor-pointer border-[#c4c0b1] w-full hover:bg-[#E84855] text-lg transition-all hover:text-white font-medium duration-150 "
              >
                About
              </li>
            </Link>
            <Link to={"/contact"}>
              <li
                onClick={OpenClose}
                className="px-5 py-3  w-full hover:bg-[#E84855] cursor-pointer text-lg transition-all hover:text-white font-medium duration-150 "
              >
                Contact Us
              </li>
            </Link>
          </ul>
          <div className="w-full border-t gap-5 py-3 justify-center border-t-[#c4c0b1] flex ">
            <Link to={"/user"}>
              <div
                onClick={OpenClose}
                className="p-3 rounded-full cursor-pointer group duration-150 active:scale-90 hover:bg-[#c4c0b1]"
              >
                <FaUserCircle
                  size={30}
                  className="text-[#c4c0b1] group-hover:text-[#280000] duration-150"
                />
              </div>
            </Link>
            <Link to={"/logout"} className={`${!loggedIn ? "hidden" : "visible"}`}>
              <div
                onClick={OpenClose}
                className="p-3 rounded-full cursor-pointer group duration-150 active:scale-90 hover:bg-[#c4c0b1]"
              >
                <FaSignOutAlt
                  size={30}
                  className="text-[#c4c0b1] group-hover:text-[#280000] duration-150"
                />
              </div>
            </Link>
            <Link to={"/login"} className={`${!loggedIn ? "visible" : "hidden"}`}>
              <div
                onClick={OpenClose}
                className="p-3 rounded-full cursor-pointer group duration-150 active:scale-90 hover:bg-[#c4c0b1]"
              >
                <FaSignInAlt
                  size={30}
                  className="text-[#c4c0b1] group-hover:text-[#280000] duration-150"
                />
              </div>
            </Link>
            <Link to={"/settings"}>
              <div
                onClick={OpenClose}
                className="p-3 rounded-full cursor-pointer group duration-150 active:scale-90 hover:bg-[#c4c0b1]"
              >
                <FaCog
                  size={30}
                  className="text-[#c4c0b1] group-hover:text-[#280000] duration-150"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}

      <div
        className={`shadow-md flex items-center fixed bg-[#E0DDCF] justify-between p-4 w-full z-10 navbar`}
      >
        <Link to={"/"}>
          <div className="mx-10 flex gap-7 items-center">
            <img
              src="https://i.ibb.co/2nMgm1V/heart.png"
              className="w-[4%] scale-150 "
              alt=""
            />
            <h1 className="text-lg scale-125 font-medium tracking-wider">
              PetPalz
            </h1>
          </div>
        </Link>
        <div>
          <HiMenuAlt3
            onClick={OpenClose}
            size={27}
            className="hover:scale-[1.15] cursor-pointer duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
