import React from 'react'

const RadioInputTemplate = ({ name, label, value, callback }) => {
    const GetValue = (e) => {
        callback(e.target.value)
    }
  return (
    <div>
          <input
              onClick={GetValue}
        type="radio"
        name={name}
        id={label}
        value={value}
              className="hidden peer tab"
      />
      <label
        htmlFor={label}
        className="font-medium border-b-4 cursor-pointer border-b-transparent duration-150 py-1 text-[#9c998f] hover:border-b-[#280000] active:scale-95 hover:scale-105 hover:text-[#280000] peer-checked:border-b-[#280000] peer-checked:text-[#280000]"
      >
        {label}
      </label>
    </div>
  );
}

export default RadioInputTemplate