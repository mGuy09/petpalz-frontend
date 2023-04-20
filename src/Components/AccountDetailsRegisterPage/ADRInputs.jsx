import { Hint } from '@fisherwise/react-autocomplete-hint'
import React from 'react'

const ADRInputs = ({ options, callback }) => {
  
  const GetInput = (value) => {
    callback(value)
  }

  return (
    <div className='w-full'>
      <Hint
        options={options}
        onFill={GetInput}
        allowEnterFill
        allowTabFill
        hintColor="#d4a2a7"
      >
        <input
          type="text"
          placeholder="Type a qualification"
          className="outline-none px-2 w-full py-1 border-2 border-[#E0DDCF] bg-[#fdfdf4] placeholder-[#bbb8ac] rounded-xl focus:border-[#e84855] hover:border-[#e84855] duration-150 focus:placeholder-[#e84855] hover:placeholder-[#e84855] placeholder:duration-150"
        />
      </Hint>
    </div>
  );
}

export default ADRInputs