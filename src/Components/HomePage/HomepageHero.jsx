import React from "react";

const HomepageHero = () => {
  return (
    <div className="h-[120vh] w-full relative flex cursor-default items-center bg-gradient-to-br from-[#DE7C5A] via-[#b15637] to-[#521c0a]">
      <div className="absolute flex flex-col gap-12 mx-40 w-[35%] shadow-xl shadow-gray-800/50 px-28 rounded-xl h-[55%] justify-center bg-[#F1F0EA]">
        <h1 className="text-5xl bg-[#DE7C5A] text-white p-4 w-[65%] rounded-xl drop-shadow indent-[3rem] tracking-wider font-medium">
          PetPalz
        </h1>
        <h1 className="text-4xl drop-shadow tracking-widest font-thin">
          Find the perfect pet sitter for your furry friend
        </h1>
        <h1 className="text-4xl drop-shadow tracking-widest font-thin">
          Because we love pets as much as you do
        </h1>
      </div>

      <img
        src="https://i.ibb.co/Sc3nGFb/5529303white.png"
        alt=""
        className="w-[30%] absolute right-[10%] bottom-[25%]"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/12/12638.png?w=740&t=st=1679580639~exp=1679581239~hmac=e39b38e4860358bb3b93d1e303ef52cd6eb47df963f22b690c73e8666731eae5"
        alt=""
        className="z-[1] w-[10%] rotate-[30deg] absolute top-[8.4rem] left-[45rem]"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/12/12638.png?w=740&t=st=1679580639~exp=1679581239~hmac=e39b38e4860358bb3b93d1e303ef52cd6eb47df963f22b690c73e8666731eae5"
        alt=""
        className="z-[1] w-[6%] rotate-[30deg] absolute top-[20rem] left-[55rem]"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/12/12638.png?w=740&t=st=1679580639~exp=1679581239~hmac=e39b38e4860358bb3b93d1e303ef52cd6eb47df963f22b690c73e8666731eae5"
        alt=""
        className="z-[1] w-[6%] rotate-[30deg] absolute top-[18rem] left-[38rem]"
      />
    </div>
  );
};

export default HomepageHero;
