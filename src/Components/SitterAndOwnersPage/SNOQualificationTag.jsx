import React from 'react'
import {TiStarburst} from 'react-icons/ti'

const SNOQualificationTag = ({QualificationName, QualificationId}) => {
  return (
    <div
      className="border px-2 cursor-default flex gap-1 py-1 text-[#DE7C5A] items-center rounded-full border-[#DE7C5A] shadow-md"
      key={"Q" + QualificationId}
    >
      <TiStarburst size={20} />
      <h1 className="font-medium">{QualificationName}</h1>
    </div>
  );
}

export default SNOQualificationTag