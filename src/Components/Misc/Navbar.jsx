import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiInformationCircle, HiMenuAlt3 } from "react-icons/hi";
import { AiFillPhone, AiFillProfile, AiOutlineClose } from "react-icons/ai";
import { FaUserCircle, FaCog, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import { useAtom } from "jotai";
import { Authenticated } from "../../StateManagement/State";
import axios from "axios";
import { IoIosChatbubbles } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import Rating from "./Rating";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useAtom(Authenticated);
  const [isDesktop, setDesktop] = useState(
    window.screen.width >= 1024 ? true : false
  );
  const [user, setUser] = useState();
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const OpenClose = () => {
    setOpen(!isOpen);
  };
  const location = useLocation().pathname;
  const ref = useRef();
  const Logout = () => {
    axios
      .get("https://localhost:7105/api/Users/Logout", { withCredentials: true })
      .then((res) => {
        localStorage.removeItem("Auth");
        navigate("login");
      });
  };
  const DropdownOpenClose = () => {
    setTimeout(() => {
      setDropdown(!dropdown);
    }, 100);
  };
  const DropdownClose = () => {
    setDropdown(false);
  };

  useEffect(() => {
    axios
      .get("https://localhost:7105/api/Users/CurrentUser", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
      });
  }, [localStorage.getItem("Auth")]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      
      if (!ref?.current?.includes(event.target)) {
        DropdownClose();
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
  }, [ref]);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("Auth") ? true : false);
  }, [localStorage.getItem("Auth")]);

  useEffect(() => {
    function HandleResize() {
      if (window.screen.width >= 1024) {
        localStorage.setItem("Window", true);
        setDesktop(true);
      } else {
        localStorage.removeItem("Window");
        setDesktop(false);
      }
    }
    window.addEventListener("resize", HandleResize);
  }, []);

  if (
    location === "/register" ||
    location === "/login" ||
    location === "/Register" ||
    location === "/Login" ||
    location === "/create-profile" ||
    location === "/Create-profile"
  )
    return null;

  if (!isDesktop) {
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
              <div
                onMouseUp={Logout}
                onClick={OpenClose}
                className={`p-3 rounded-full cursor-pointer group duration-150 active:scale-90 hover:bg-[#c4c0b1] ${
                  !loggedIn ? "hidden" : "visible"
                }`}
              >
                <FaSignOutAlt
                  size={30}
                  className="text-[#c4c0b1] group-hover:text-[#280000] duration-150"
                />
              </div>
              <Link
                to={"/login"}
                className={`${!loggedIn ? "visible" : "hidden"}`}
              >
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
          <div className="ml-10 flex gap-7 items-center">
            <img
              src="https://i.ibb.co/2nMgm1V/heart.png"
              className="w-[4%] scale-150 "
              alt=""
            />
            <h1 className="text-lg scale-125 font-medium tracking-wider">
              PetPalz
            </h1>
          </div>
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
  }
  return (
    <div className="relative">
      
      {/* Navbar */}

      <div
        className={`shadow-md flex fixed bg-[#E0DDCF] justify-around items-center p-3 w-full z-10 navbar`}
      >
        <div>
          <div className="flex gap-7 items-center">
            <img
              src="https://i.ibb.co/2nMgm1V/heart.png"
              className="w-[1.5rem] scale-150 "
              alt=""
            />
            <h1
              onClick={() => navigate("/")}
              className="text-lg scale-125 cursor-pointer font-medium tracking-wider"
            >
              PetPalz
            </h1>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <Link to={`/Chats/home`}>
            <div className="rounded-full p-2 hover:bg-[#c4c0b1] text-[#9c998f] hover:text-[#280000] duration-150 active:scale-105 hover:scale-110">
              <IoIosChatbubbles size={27} className="" />
            </div>
          </Link>
          <Link to={"/pet-sitters&owners"}>
            <div className="rounded-full p-2 hover:bg-[#c4c0b1] text-[#9c998f] hover:text-[#280000] duration-150 active:scale-105 hover:scale-110">
              <BsPeopleFill size={27} className="" />
            </div>
          </Link>
          <Link to={"/Contact"}>
            <div className="rounded-full p-2 hover:bg-[#c4c0b1] text-[#9c998f] hover:text-[#280000] duration-150 active:scale-105 hover:scale-110">
              <AiFillPhone size={27} className="" />
            </div>
          </Link>
          <Link to={"/About"}>
            <div className="rounded-full p-2 hover:bg-[#c4c0b1] text-[#9c998f] hover:text-[#280000] duration-150 active:scale-105 hover:scale-110">
              <HiInformationCircle size={27} className="" />
            </div>
          </Link>
        </div>
        <div
          onClick={() => setDropdown(true)}
          className="rounded-full text-[#9c998f] cursor-pointer hover:bg-[#c4c0b1] hover:text-[#280000] p-2 hover:scale-110 active:scale-105 duration-150"
        >
          <FaUserCircle size={27} />
        </div>
      </div>

      {/* Dropdown User */}
      {dropdown ? (
        user ? (
          <div className="bg-white fixed p-4 drop-shadow-md h-[14.5rem] px-10 shadow-black/25 duration-150 top-[5.5rem] right-20 z-[1]">
            <div className="absolute w-[2rem] h-[2rem] bg-white -top-3 right-[11.7rem] rotate-[52deg] skew-x-12 z-[1]"></div>
            <div className="flex pb-2 gap-5 items-end border-b-2 border-b-[#c4c0b1]">
              {user ? (
                <img
                  src={user.profilePicUrl}
                  alt="pfp"
                  className="w-[4.5rem] z-[2] border-2 bg-[#c4c0b1] drop-shadow-md border-[#c4c0b1] rounded-full"
                />
              ) : (
                <div className="w-[2rem] h-[2rem] bg-[#c4c0b1] rounded-full"></div>
              )}
              <div className="flex flex-col gap-0">
                <p className="font text-lg">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-sm font-semibold underline underline-offset-2 tracking-wide">
                  {user.serviceType.name}
                </p>
              </div>
            </div>
            <div className="px-4 py-4">
              <Rating ratingValue={user.rating.rating} />
            </div>

            <div>
              <div className="w-full border-t gap-5 py-3 justify-center border-t-[#c4c0b1] flex ">
                <div
                  onMouseDown={() => navigate(`/user`)}
                  className="p-3 rounded-full drop-shadow-sm cursor-pointer group duration-150 active:scale-90 hover:bg-[#c4c0b1]"
                >
                  <AiFillProfile
                    size={25}
                    className="text-[#c4c0b1] group-hover:text-[#280000] duration-150"
                  />
                </div>
                <div
                  onMouseUp={Logout}
                  className={`p-3 rounded-full drop-shadow-sm cursor-pointer group duration-150 active:scale-90 hover:bg-[#c4c0b1] ${
                    !loggedIn ? "hidden" : "visible"
                  }`}
                >
                  <FaSignOutAlt
                    size={25}
                    className="text-[#c4c0b1] group-hover:text-[#280000] duration-150"
                  />
                </div>
                <Link
                  to={"/login"}
                  className={`${!loggedIn ? "visible" : "hidden"}`}
                >
                  <div className="p-3 rounded-full drop-shadow-sm cursor-pointer group duration-150 active:scale-90 hover:bg-[#c4c0b1]">
                    <FaSignInAlt
                      size={25}
                      className="text-[#c4c0b1] group-hover:text-[#280000] duration-150"
                    />
                  </div>
                </Link>
                <Link>
                  <div
                    onMouseDown={() => navigate("/settings")}
                    className="p-3 rounded-full drop-shadow-sm cursor-pointer group duration-150 active:scale-90 hover:bg-[#c4c0b1]"
                  >
                    <FaCog
                      size={25}
                      className="text-[#c4c0b1] group-hover:text-[#280000] duration-150"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      ) : (
        <div className="bg-white fixed p-4 shadow-lg scale-0 flex flex-col -translate-y-[120%] shadow-black/25 duration-200 top-[4.2rem] right-52 z-[1]">
          <div className="flex pb-2 invisible gap-5 items-end border-b-2 border-b-[#c4c0b1]">
            {user ? (
              <img
                src={user.profilePicUrl}
                alt="pfp"
                className="w-[4.5rem] border-2 border-[#c4c0b1] rounded-full"
              />
            ) : (
              <div className="w-[2rem] h-[2rem] bg-[#c4c0b1] rounded-full"></div>
            )}
            <div className="flex flex-col invisible gap-0">
              <p className="font-semibold text-lg">
                {user ? user.firstName : ""} {user ? user.lastName : ""}
              </p>
              <p className="text-sm">{user ? user.serviceType.name : ""}</p>
            </div>
          </div>
          <div className="px-4 invisible py-4">
            {user ? (
              <Rating ratingValue={user.rating.rating} />
            ) : (
              <Rating ratingValue={100} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
