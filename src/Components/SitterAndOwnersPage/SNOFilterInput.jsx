import React from "react";
import { FaDotCircle, FaRegDotCircle } from "react-icons/fa";

const SNOFilterInput = ({ filterId, filterName, callback }) => {
  return (
    <div onClick={callback}>
      <input
        type="checkbox"
        name="filter"
        id={filterId}
        value={filterName}
        className="peer group invisible checkbox"
      />
      <label
        htmlFor={filterId}
        className="px-3 py-1 border border-[white] text-white indent-2 hover:bg-[#c4c0b1]/30 peer-checked:hover:bg-[#E84855]/60 rounded-full flex duration-150 transition-all items-center gap-2 peer-checked:border-[#E84855] peer-checked:text-white peer-checked:bg-[#E84855]"
      >
        <FaDotCircle className=""/> {filterName}
      </label>
    </div>
  );
};

export default SNOFilterInput;
