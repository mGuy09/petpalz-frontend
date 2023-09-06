import axios from "axios";
import React, { useEffect, useState } from "react";
import RadioInputTemplate from "../Misc/RadioInputTemplate";
import Rating from "../Misc/Rating";
import ReviewCard from "../Misc/ReviewCard";
import { useNavigate } from "react-router";

const UserContent = ({ user, status }) => {
  const [tab, setTab] = useState("0");
  const [reviews, setReviews] = useState([]);
  const [statusUpdate, setStatusUpdate] = useState(false)
  const tabList = document.querySelectorAll(".tab");
  const navigate = useNavigate();

  const userType = user
    ? user.userType.substring(0, 3) + " " + user.userType.substring(3)
    : "";

  const UpdateTab = (callback) => {
    setTab(callback);
  };

  const StatusState = (e) => {
    console.log(e)
    console.log(e.target.innerText, status.name);
    if(e.target.innerText === status.name){
      setStatusUpdate(false)
    }
    else{
      setStatusUpdate(true)
    }
  }

  const UpdateStatus = (e) => {
    if(e.key === "Enter"){
      console.log(e.key)
    }
  }

  useEffect(() => {
    if (user) {
      axios.get(`https://localhost:7105/api/Reviews/${user.id}`).then((res) => {
        console.log(res);
        setReviews(res.data);
      });
    }
  }, [user]);

  useEffect(() => {
    tabList.forEach((item) => {
      if (item.value === tab) {
        item.checked = true;
      }
    });
  }, [tab, tabList]);

  if (user)
    return (
      <>
        <div className="h-[30rem] pt-10 w-full items-center justify-around gap-24 bg-gradient-to-br relative flex from-[#E84855] via-[#E84855] to-[#8f121d]">
          <div className="border-4 relative group select-none bg-white border-white cursor-pointer flex duration-150 h-[67%] rounded-full">
            <img src={user.profilePicUrl} alt="" />
            <div
              onClick={() => {
                console.log("change picture");
              }}
              className={`w-full h-full flex justify-center items-center absolute top-0 rounded-full duration-150 bg-black/0 group-hover:bg-black/60`}
            >
              <p className="text-transparent select-none cursor-pointer duration-150 text-2xl whitespace-pre-wrap font-light group-hover:text-white drop-shadow-md">
                Click to change picture
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-5xl text-white drop-shadow-md font-light">
              {user.firstName} {user.lastName}
            </div>
            <div className="text-2xl font-light drop-shadow-md text-white capitalize">
              {userType} - {user.serviceType.name}
            </div>
            <div className="bg-white drop-shadow-md w-[18rem] h-[2px] rounded-full"></div>
            <div className="my-5 group flex cursor-pointer gap-1 text-white drop-shadow-md font-medium text-lg hover:text-gray-300 duration-100">
              <p className="group-[status] group-focus:text-white outline-none" onClick={()=>navigate('/settings')}>{status ? status.name : ""}</p> <p className="group font-normal text-gray-300/0 duration-150 delay-200 group-hover:visible group-hover:text-gray-300/50 group-focus:text-gray-300/50">- Change Status</p>
            </div>
            
          </div>
        </div>
        <div className="px-10 flex gap-[16rem] bg-[#E0DDCF] py-5 justify-center">
          <RadioInputTemplate
            name={"tabs"}
            label={"Public Info"}
            value={0}
            callback={UpdateTab}
          />
          <RadioInputTemplate
            name={"tabs"}
            label={"Reviews"}
            value={1}
            callback={UpdateTab}
          />
        </div>
        {tab === "0" ? (
          <div className="flex flex-col gap-16 bg-[#F1F0EA] items-center justify-center py-10">
            <div className="flex flex-col pb-16 gap-5 w-[54%] text-xl leading-relaxed">
              <h1 className="indent-2 font-medium">Description:</h1>
                <p className="font-light drop-shadow-md">
                  {user.description}
                  {user.description.substring(user.description.length - 1) ===
                    "."
                    ? ""
                    : "."}
                </p>
                <p onClick={()=>navigate('/settings')} className="text-sky-600 hover:text-sky-300 duration-100 underline underline-offset-2 cursor-pointer drop-shadow-md ">Change Description</p>

            </div>
          </div>
        ) : (
          tab === "1" && (
            <div className="flex flex-col gap-16 bg-[#F1F0EA] items-center justify-center py-10">
              <div className="flex gap-[12rem] border-b-2 justify-center w-[70%] border-b-[#E0DDcf] pb-10 pt-5">
                <p className="flex gap-3 text-lg font-medium drop-shadow-md">
                  Total reviews:
                  <span className="font-medium drop-shadow-md">
                    {reviews.length}
                  </span>
                </p>
                <Rating
                  ratingValue={reviews.length === 0 ? 0 : user.rating.rating}
                />
              </div>
              <div className="flex flex-col gap-10 pb-10">
                {reviews.length > 0
                  ? reviews.map((x) => (
                    <ReviewCard review={x} />
                  ))
                  : "No Reviews Yet"}
              </div>
            </div>
          )
        )}
      </>
    );
  return "";
};

export default UserContent;
