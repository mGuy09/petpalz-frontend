import React from "react";
import Rating from "../Misc/Rating";
import SNOQualificationTag from "./SNOQualificationTag";

const SNOCard = ({isPetSitter}) => {
  if(isPetSitter)return (
    <div className="bg-white flex flex-col gap-5 w-[40%] p-5  shadow-lg">
      <div className="flex gap-20">
        <div className="w-[5rem] hover:scale-110 duration-200 h-[5rem] flex items-center justify-center bg-[#b1aea0] rounded-full shadow-md">
          <img src="https://i.ibb.co/Jkb7FzG/user-female.png" alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-light">Full Name</h1>
          <p className="font-medium underline underline-offset-[3px]">Service type</p>
        </div>
      </div>
      <div className="w-full h-[2px] bg-[#c4c0b1] "></div>

      <div className="flex gap-3 justify-center flex-wrap">
        <SNOQualificationTag
          QualificationId={0}
          QualificationName="Qualification 1"
        />
        <SNOQualificationTag
          QualificationId={1}
          QualificationName="Qualification 2"
        />
        <SNOQualificationTag
          QualificationId={2}
          QualificationName="Qualification 3"
        />
      </div>
      <div className="flex flex-col gap-4 h-[50%] p-5">
        <h1 className="font-medium text-lg underline underline-offset-[3px]">Description</h1>
        <p className="overflow-hidden relative font-light whitespace-pre-line w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo
          lacus, mattis sed eleifend id, eleifend ullamcorper odio. Sed volutpat
          est neque, id lobortis felis feugiat non. Praesent et mauris in diam
          dictum semper id eu libero. Donec sit amet vulputate enim. Aenean
          cursus mi sit amet metus egestas, ac placerat est tristique.
          Vestibulum varius tellus at ex consectetur dictum. Sed maximus metus
          libero. Donec a finibus metus. Ut tincidunt lectus elit, nec faucibus
          nulla sodales sit amet. Phasellus ac sollicitudin nunc.
          <div className="absolute w-full h-[60%] bottom-0 right-0 bg-gradient-to-b from-transparent via-white/25 to-white"></div>
        </p>
      </div>
      <div className="flex justify-between px-5">
        <Rating ratingValue={65} />
        <button className="shadow-md px-2 py-1 border-2 rounded-full border-[#E84855] text-[#E84855] hover:text-white hover:bg-[#E84855] active:border-[#8a2931] active:bg-[#8a2931] hover:scale-110 active:scale-105 duration-150 font-medium">
          View More
        </button>
      </div>
    </div>
    );
    return (
      <div className="bg-white flex flex-col gap-5 w-[30%] p-5  shadow-lg">
        <div className="flex gap-20">
          <div className="w-[5rem] h-[5rem] hover:scale-110 duration-200 flex items-center justify-center bg-[#b1aea0] rounded-full shadow-md">
            <img src="https://i.ibb.co/Jkb7FzG/user-female.png" alt="" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-light">Full Name</h1>
            <p className="font-medium underline underline-offset-[3px]">
              Service type
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#c4c0b1] "></div>
        <div className="flex flex-col gap-4 h-[50%] p-5">
          <h1 className="font-medium text-lg underline underline-offset-[3px]">
            Description
          </h1>

          <div className="overflow-hidden relative font-light whitespace-pre-line w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo
            lacus, mattis sed eleifend id, eleifend ullamcorper odio. Sed
            volutpat est neque, id lobortis felis feugiat non. Praesent et
            mauris in diam dictum semper id eu libero. Donec sit amet vulputate
            enim. Aenean cursus mi sit amet metus egestas, ac placerat est
            tristique. Vestibulum varius tellus at ex consectetur dictum. Sed
            maximus metus libero. Donec a finibus metus. Ut tincidunt lectus
            elit, nec faucibus nulla sodales sit amet. Phasellus ac sollicitudin
            nunc.
            <div className="absolute w-full h-[60%] bottom-0 right-0 bg-gradient-to-b from-transparent via-white/25 to-white"></div>
          </div>
        </div>
        <div className="flex justify-between px-5">
          <Rating ratingValue={65} />
          <button className="shadow-md px-2 py-1 border-2 rounded-full border-[#E84855] text-[#E84855] hover:text-white hover:bg-[#E84855] active:border-[#8a2931] active:bg-[#8a2931] hover:scale-110 active:scale-105 duration-150 font-medium">
            View More
          </button>
        </div>
      </div>
    );
};

export default SNOCard;
