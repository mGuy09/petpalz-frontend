import React from "react";
import { FaDotCircle } from "react-icons/fa";


const SNOFilterSkeleton = () => {
  return (
    <div className="my-3">
      <label className="px-3 flex gap-2 animate-pulse bg-white/60 py-1 text-transparent indent-2 rounded-full">
        <FaDotCircle />
        ------
      </label>
    </div>
  );
};

export default SNOFilterSkeleton;
