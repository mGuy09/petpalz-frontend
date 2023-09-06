import React from "react";
import Rating from "../Misc/Rating";
import SNOQualificationTag from "./SNOQualificationTag";
import { useNavigate } from "react-router";

const SNOCard = ({ isPetSitter, info, skeleton }) => {
  const navigate = useNavigate();
  if (isPetSitter)
    return (
      <div className="bg-white flex flex-col gap-5 pb-20 w-[40%] p-5  shadow-lg">
        <div className="flex gap-20">
          <div className="w-[5rem] border-2 border-[#c4c0b1] hover:scale-110 duration-200 h-[5rem] flex items-center justify-center bg-[#b1aea0] rounded-full shadow-md">
            <img src={info.profilePicUrl} alt="pfp" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-light">
              {info.firstName} {info.lastName}
            </h1>
            <p className="font-medium underline underline-offset-[3px]">
              {info.serviceType.name}
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#c4c0b1] "></div>

        <div className="flex gap-3 justify-center flex-wrap">
          {info.qualifications.map((x) => (
            <SNOQualificationTag
              QualificationId={x.id}
              QualificationName={x.name}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 h-[50%] p-5">
          <h1 className="font-medium text-lg underline underline-offset-[3px]">
            Description
          </h1>
          <div className="overflow-hidden relative font-light whitespace-pre-line w-full">
            {info.description}
            <div className="absolute w-full h-[60%] bottom-0 right-0 bg-gradient-to-b from-transparent via-white/25 to-white"></div>
          </div>
        </div>
        <div className="flex justify-between px-5">
          <Rating ratingValue={info.rating.rating} />
          <button
            onMouseUp={() => navigate(`/profile/${info.id}`)}
            className="shadow-md px-2 py-1 border-2 rounded-full border-[#E84855] text-[#E84855] hover:text-white hover:bg-[#E84855] active:border-[#8a2931] active:bg-[#8a2931] hover:scale-110 active:scale-105 duration-150 font-medium"
          >
            View More
          </button>
        </div>
      </div>
    );
  else if (skeleton) {
    return (
      <div className="bg-white flex flex-col gap-5 w-[32%] p-5  shadow-lg">
        <div className="flex gap-20">
          <div className="w-[5rem] h-[5rem] animate-pulse text-white/0 duration-200 flex items-center justify-center bg-[#b1aea0] rounded-full shadow-md">
            d
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-2xl text-white/0 rounded-md bg-[#cecbc0] animate-pulse font-light">
              <p className="invisible">firstname lastname</p>
            </div>
            <div className="font-medium text-white/0 rounded-md bg-[#cecbc0] animate-pulse underline underline-offset-[3px]">
              <p className="invisible">service</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 h-[80%] p-5">
          <div className="font-medium text-xl underline rounded-md bg-[#cecbc0] animate-pulse text-white/0 underline-offset-[3px]">
            <p className="invisible">Description</p>
          </div>

          <div className="overflow-hidden h-[20rem] relative text-transparent rounded-md bg-[#cecbc0] animate-pulse font-light whitespace-pre-line w-full">
            <p className="invisible">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  if(!isPetSitter)
    return (
      <div className="bg-white flex flex-col gap-5 w-[30%] p-5  shadow-lg">
        <div className="flex gap-20">
          <div className="w-[5rem] h-[5rem] hover:scale-110 duration-200 flex items-center justify-center bg-[#b1aea0] rounded-full shadow-md">
            <img src={info.profilePicUrl} alt="pfp" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-light">
              {info.firstName} {info.lastName}
            </h1>
            <p className="font-medium underline underline-offset-[3px]">
              {info.serviceType.name}
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-[#c4c0b1] "></div>
        <div className="flex flex-col gap-4 h-[50%] p-5">
          <h1 className="font-medium text-lg underline underline-offset-[3px]">
            Description
          </h1>
  
          <div className="overflow-hidden h-[20rem] relative font-light whitespace-pre-line w-full">
            {info.description}
            <div className="absolute w-full h-[60%] bottom-0 right-0 bg-gradient-to-b from-transparent via-white/25 to-white"></div>
          </div>
        </div>
        <div className="flex justify-between px-5">
          <Rating ratingValue={info.rating.rating} />
          <button
            onMouseUp={() => navigate(`/profile/${info.id}`)}
            className="shadow-md px-2 py-1 border-2 rounded-full border-[#E84855] text-[#E84855] hover:text-white hover:bg-[#E84855] active:border-[#8a2931] active:bg-[#8a2931] hover:scale-110 active:scale-105 duration-150 font-medium"
          >
            View More
          </button>
        </div>
      </div>
    );
  }
;

export default SNOCard;
