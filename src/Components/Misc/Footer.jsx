import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#280000] text-[#a39f8d] flex flex-col gap-6 md:flex-row justify-around px-10 pt-5 pb-32">
      <div className="flex flex-row md:flex-col  gap-3 ">
        <FaFacebookSquare
          size={35}
          className="cursor-pointer hover:text-[#E0DDCF]"
        />
        <FaInstagramSquare
          size={35}
          className="cursor-pointer hover:text-[#E0DDCF]"
        />
        <FaTwitterSquare
          size={35}
          className="cursor-pointer hover:text-[#E0DDCF]"
        />
      </div>
      <div>
        <p className="text-[#bdb9a7] text-lg font-bold cursor-default">
          Support
        </p>
        <p className="cursor-pointer hover:text-[#E0DDCF]">Help </p>
        <p className="cursor-pointer hover:text-[#E0DDCF]">Advisories</p>
        <p className="cursor-pointer hover:text-[#E0DDCF]">Contact </p>
      </div>
      <div>
        <p className="text-[#bdb9a7] text-lg font-bold cursor-default">
          Company{" "}
        </p>
        <p className="cursor-pointer hover:text-[#E0DDCF]">About </p>
        <p className="cursor-pointer hover:text-[#E0DDCF]">Blog </p>
      </div>
      <div>
        <p className="text-[#bdb9a7] text-lg font-bold cursor-default">
          Terms & Policies{" "}
        </p>
        <p className="cursor-pointer hover:text-[#E0DDCF]">Policies </p>
        <p className="cursor-pointer hover:text-[#E0DDCF]">Terms of Use </p>
        <p className="cursor-pointer hover:text-[#E0DDCF]">Privacy </p>
        <p className="cursor-pointer hover:text-[#E0DDCF]">Code of Conduct </p>
      </div>
    </div>
  );
}

export default Footer;
