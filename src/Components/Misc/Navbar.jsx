import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setOpen] = React.useState(false);
  const OpenClose = () => {
    setOpen(!isOpen);
  };
  
  return (
    <div>
      {/* Backdrop */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed w-full h-screen bg-black/60 z-20 backdrop-blur-sm duration-500 transition-all ${
          !isOpen && "bg-transparent backdrop-blur-none -z-10"
        }`}
      ></div>

      {/* Sidebar */}

      <div
        className={`h-screen fixed w-[20%] flex-col py-5 z-30 -right-0 bg-[#F1F0EA] duration-500 ${
          !isOpen && "translate-x-[100%] "
        }`}
      >
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
        <div className="flex flex-col h-[95%] justify-between">
          <ul className="w-full border-t border-t-gray-400">
            <li
              onClick={() => setOpen(false)}
              className="px-5 py-3 border-b cursor-pointer border-gray-400 w-full hover:bg-[#E84855] text-lg transition-all hover:text-white font-medium duration-150 "
            >
              Home
            </li>
            <li
              onClick={() => setOpen(false)}
              className="px-5 py-3 border-b cursor-pointer border-gray-400 w-full hover:bg-[#E84855] text-lg transition-all hover:text-white font-medium duration-150 "
            >
              Pet Sitters & Owners
            </li>
            <li
              onClick={() => setOpen(false)}
              className="px-5 py-3 border-b cursor-pointer border-gray-400 w-full hover:bg-[#E84855] text-lg transition-all hover:text-white font-medium duration-150 "
            >
              About
            </li>
            <li
              onClick={() => setOpen(false)}
              className="px-5 py-3  w-full hover:bg-[#E84855] cursor-pointer text-lg transition-all hover:text-white font-medium duration-150 "
            >
              Contact Us
            </li>
          </ul>
          <div className="w-full border-t gap-5 py-3 justify-center border-t-gray-400 flex ">
            <div
              onClick={() => setOpen(false)}
              className="p-3 rounded-full cursor-pointer group duration-150 hover:bg-[#c4c0b1]"
            >
              <FaUserCircle
                size={30}
                className="text-[#c4c0b1] group-hover:text-[#280000] duration-150"
              />
            </div>
            <div
              onClick={() => setOpen(false)}
              className="p-3 rounded-full cursor-pointer group duration-150 hover:bg-[#c4c0b1]"
            >
              <FaSignOutAlt
                size={30}
                className="text-[#c4c0b1] group-hover:text-[#280000] duration-150"
              />
            </div>
            <div
              onClick={() => setOpen(false)}
              className="p-3 rounded-full cursor-pointer group duration-150 hover:bg-[#c4c0b1]"
            >
              <FaCog
                size={30}
                className="text-[#c4c0b1] group-hover:text-[#280000] duration-150"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}

      <div
        className={`shadow-md flex items-center fixed bg-[#E0DDCF] justify-between p-4 w-full z-10 navbar`}
      >
        <h1 className="text-lg scale-125 font-medium tracking-wider mx-10">PetPalz</h1>
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
