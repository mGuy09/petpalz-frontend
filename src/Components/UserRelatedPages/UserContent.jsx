import axios from "axios";
import React, { useEffect, useState } from "react";
import RadioInputTemplate from "../Misc/RadioInputTemplate";
import Rating from "../Misc/Rating";
import ReviewCard from "../Misc/ReviewCard";

const UserContent = ({ user, status }) => {
  const [tab, setTab] = useState("0");
  const [reviews, setReviews] = useState([]);
  const tabList = document.querySelectorAll(".tab");

  const userType = user
    ? user.userType.substring(0, 3) + " " + user.userType.substring(3)
    : "";

  const UpdateTab = (callback) => {
    setTab(callback);
  };

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
            <div className="my-5 text-white font-medium text-lg">
              {status ? status.name : ""}
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
          <div>Status</div>
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
