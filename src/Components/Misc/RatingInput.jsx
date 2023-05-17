import React, { useEffect, useState } from "react";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const RatingInput = ({ callback }) => {
  const [rating, setRating] = useState(0);
  useEffect(() => {
    callback(rating);
  }, [rating]);
  return (
    <div className="flex gap-3">
      <div onClick={() => setRating(20)} className="hover:scale-125 duration-200">
        {/* {rating > 0 ? (
          <RiStarFill
            className="text-[#DE7C5A] drop-shadow-md duration-150"
            size={35}
          />
        ) : (
          <RiStarLine
            className="text-[#DE7C5A] drop-shadow-md duration-150"
            size={35}
          />
        )} */}
        <RiStarFill
          className={`text-[#DE7C5A] drop-shadow-md scale-110 duration-150 ${
            rating > 0 ? "" : "hidden"
          }`}
          size={35}
        />
        <RiStarLine
          className={`text-[#DE7C5A] drop-shadow-md duration-150 ${
            rating > 0 ? "hidden" : ""
          }`}
          size={35}
        />
      </div>
      <div onClick={() => setRating(40)} className="hover:scale-125 duration-200">
        <RiStarFill
          className={`text-[#DE7C5A] drop-shadow-md scale-110 duration-150 ${
            rating > 20 ? "" : "hidden"
          }`}
          size={35}
        />
        <RiStarLine
          className={`text-[#DE7C5A] drop-shadow-md duration-150 ${
            rating > 20 ? "hidden" : ""
          }`}
          size={35}
        />
      </div>
      <div onClick={() => setRating(60)} className="hover:scale-125 duration-200">
        <RiStarFill
          className={`text-[#DE7C5A] drop-shadow-md scale-110 duration-150 ${
            rating > 40 ? "" : "hidden"
          }`}
          size={35}
        />
        <RiStarLine
          className={`text-[#DE7C5A] drop-shadow-md duration-150 ${
            rating > 40 ? "hidden" : ""
          }`}
          size={35}
        />
      </div>
      <div onClick={() => setRating(80)} className="hover:scale-125 duration-200">
        <RiStarFill
          className={`text-[#DE7C5A] drop-shadow-md scale-110 duration-150 ${
            rating > 60 ? "" : "hidden"
          }`}
          size={35}
        />
        <RiStarLine
          className={`text-[#DE7C5A] drop-shadow-md duration-150 ${
            rating > 60 ? "hidden" : ""
          }`}
          size={35}
        />
      </div>
      <div onClick={() => setRating(100)} className="hover:scale-125 duration-200">
        <RiStarFill
          className={`text-[#DE7C5A] drop-shadow-md scale-110 duration-150 ${
            rating > 80 ? "" : "hidden"
          }`}
          size={35}
        />
        <RiStarLine
          className={`text-[#DE7C5A] drop-shadow-md duration-150 ${
            rating > 80 ? "hidden" : ""
          }`}
          size={35}
        />
      </div>
    </div>
  );
};

export default RatingInput;
