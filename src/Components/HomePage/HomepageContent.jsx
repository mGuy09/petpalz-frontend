import React from 'react'

const HomepageContent = () => {
  return (
    <div className="border-t-4 border-t-[#E84855]">
      {/* Description section */}

      <div className="flex relative items-center justify-between h-screen bg-[#280000]">
        <img
          src="https://i.ibb.co/Phc5mpd/c6ad58e0-00f0-4d6e-9ad2-275ba2d5aa71.png"
          alt=""
          className="w-[70%] absolute bottom-0 -left-7"
        />
        <div className="bg-[#F1F0EA] absolute w-[50%] px-14 gap-10 right-0 h-full p-10 justify-center flex flex-col">
          <div className="flex flex-col gap-3 items-center drop-shadow-lg rounded p-10">
            <p className="text-2xl">
              Are you looking for somebody to take care of your pet?
            </p>
            <p className="text-2xl">
              Or maybe you want to take care of someone else's pet.
            </p>
            <p className="text-2xl">
              Check out PetPalz and choose if you're a pet owner or pet sitter
            </p>
          </div>
          <div className="w-full h-2 rounded-full bg-[#E84855]"></div>
          <div className="p-10 flex flex-col gap-5">
            <p className="text-xl font-thin">
              The pet owners and pet sitters finder is an online platform that
              connects pet owners with trusted and reliable pet sitters and dog
              walkers in their local area.
            </p>
            <p className="text-xl font-thin">
              Through the website, pet owners can search for caregivers based on
              location, availability, and services offered, and can read reviews
              from other pet owners to find the perfect match for their furry
              friend.
            </p>
            <p className="text-xl font-thin">
              Pet sitters and dog walkers can also create profiles on the
              website, allowing them to showcase their experience,
              qualifications, and services.
            </p>
            <p className="text-xl font-thin">
              This platform provides a convenient and stress-free way for pet
              owners to find the right caregiver for their pets, and for pet
              sitters and dog walkers to connect with potential clients in their
              area.
            </p>
          </div>
        </div>
      </div>
      {/* Get Started Section */}
      <div className="h-[70vh] flex flex-row-reverse border-t-4 border-t-[#E84855] bg-[#F1F0EA] justify-around items-center relative">
        <img
          src="https://i.ibb.co/xfGPLf5/55293023.png"
          alt=""
          className="w-[35%]"
        />
        <div className="bg-white w-[36%] h-[30%] flex flex-col px-20 rounded-xl justify-evenly drop-shadow-md">
          <p className="text-2xl font-thin antialiased">
            Take part in this amazing community by signing in
          </p>
          <button className="px-4 py-2 w-[20%] border-2 font-medium border-[#E84855] text-[#E84855] hover:bg-[#E84855] hover:text-white hover:scale-110 duration-150 active:scale-105 antialiased active:bg-[#8a2931] active:border-[#8a2931] rounded-full ">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomepageContent