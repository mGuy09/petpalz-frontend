import React from "react";

const HomepageHero = () => {
  return (
    <div className="h-[120vh] w-full relative flex cursor-default items-center bg-gradient-to-br from-[#DE7C5A] via-[#b15637] to-[#521c0a]">
      <div className="absolute flex flex-col gap-12 mx-40 w-[35%] shadow-xl shadow-gray-800/50 px-28 rounded-xl h-[55%] justify-center bg-[#E0DDCF]">
        <h1 className="text-5xl bg-[#DE7C5A] text-white p-4 w-[65%] rounded-xl drop-shadow indent-[3rem] tracking-wider font-medium">
          PetPalz
        </h1>
        <h1 className="text-3xl drop-shadow tracking-wider font-medium">
          Find the purrfect Pet Sitter for your pet
        </h1>
      </div>
      <img
        src="https://i.ibb.co/dDLcNYB/ac803bd7-299c-4df6-9260-0fa8f8762518.png"
        alt=""
        className="h-full w-full absolute"
      />
    </div>
  );
};

export default HomepageHero;
