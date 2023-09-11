import React, { useEffect, useState } from "react";
import RadioInputTemplate from "../Misc/RadioInputTemplate";
import SNOQualificationTag from "../SitterAndOwnersPage/SNOQualificationTag";
import { BsFillChatFill } from "react-icons/bs";
import axios from "axios";
import ReviewCard from "../Misc/ReviewCard";
import Rating from "../Misc/Rating";
import RatingInput from "../Misc/RatingInput";
import { useNavigate } from "react-router";

const PublicProfilePageContent = ({ user, status }) => {
  const [tab, setTab] = useState("0");
  const [reviewMessage, setReviewMessage] = useState();
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const tabList = document.querySelectorAll(".tab");
  const navigate = useNavigate();
  const userType = user
    ? user.userType.substring(0, 3) + " " + user.userType.substring(3)
    : "";

  const UpdateTab = (callback) => {
    setTab(callback);
  };
  const UpdateRating = (callback) => {
    setRating(callback)
  }

  const UpdateReviewMessage = (e) => {
    setReviewMessage(e.target.value);
  };
  const Submit = () => {
    if (reviewMessage !== null || reviewMessage.length > 1)
      axios
        .post(
          "https://localhost:7105/api/Reviews",
          {
            userId: user.id,
            message: reviewMessage,
            rating: rating,
          },
          { withCredentials: true }
        )
        .then((res) => {
          window.location.reload()
        });
  };
  const DeleteReview = (id) => {
    setReviews(reviews.filter(x => x.id !== id))
  }


  const ChatBubble = () => {
    axios.get('https://localhost:7105/api/Users/CurrentUser', { withCredentials: true }).then(res => {
      axios.get(`https://localhost:7105/api/Chats/${user.id}`, { withCredentials: true }).then(x => {
        console.log(res.data)
        console.log(x.data[0])
        if (x.data.length < 1) {
          axios.post('https://localhost:7105/api/Chats', { userId1: res.data.id, userId2: user.id }, { withCredentials: true }).then(y => {
            if (y.status == 200) {
              navigate(`/Chats/${y.data.toString()}`)
            }
          })
        }
        else {
          navigate(`/Chats/${x.data[0].id.toString()}`)
        }
      })
    })
  }


  useEffect(() => {
    tabList.forEach((item) => {
      if (item.value === tab) {
        item.checked = true;
      }
    });
  }, [tab, tabList]);

  useEffect(() => {
    if (tab === "1") {
      axios
        .get(`https://localhost:7105/api/Reviews/${user.id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setReviews(res.data);
        });
    }
  }, [tab]);
  return (
    <>
      {user ? (
        <>
          <div className="h-[30rem] pt-10 w-full items-center justify-around gap-24 bg-gradient-to-br relative flex from-[#E84855] via-[#E84855] to-[#8f121d]">
            <div className="border-4 border-white bg-white flex h-[67%] rounded-full">
              <img src={user.profilePicUrl} alt="" />
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

          {/* Chat Bubble User */}

          <div onClick={ChatBubble} className="fixed shadow-lg shadow-black/30 duration-150 bottom-16 right-16 bg-[#cec8b1] text-[#280000] hover:text-white active:scale-[1.07] hover:scale-[1.17] p-4 rounded-full">
            <BsFillChatFill size={32} />
          </div>



          <div className="px-10 flex gap-[16rem] bg-[#E0DDCF] py-5 justify-center">
            <RadioInputTemplate
              name={"tabs"}
              label={"Description"}
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
              <div className="flex pb-10 border-b-2 border-b-[#E0DDcf] w-[70%] flex-wrap gap-5 items-center justify-center ">
                {user.qualifications
                  ? user.qualifications.map((x) => (
                    <SNOQualificationTag
                      QualificationId={x.id}
                      QualificationName={x.name}
                      key={x.name}
                    />
                  ))
                  : user.qualifications}
              </div>
              <div className="flex flex-col pb-16 gap-5 w-[54%] text-xl leading-relaxed">
                <h1 className="indent-2 font-medium">Description:</h1>
                <p className="font-light drop-shadow-md">
                  {user.description}
                  {user.description.substring(user.description.length - 1) ===
                    "."
                    ? ""
                    : "."}
                </p>
              </div>
            </div>
          ) : tab === "1" ? (

            <div className="flex flex-col gap-16 bg-[#F1F0EA] items-center justify-center py-10">
              <div className="flex gap-[12rem] border-b-2 justify-center w-[70%] border-b-[#E0DDcf] pb-10 pt-5">
                <p className="flex gap-3 text-lg font-medium drop-shadow-md">
                  Total reviews:
                  <span className="font-medium drop-shadow-md">
                    {reviews.length}
                  </span>
                </p>
                <Rating ratingValue={reviews.length === 0 ? 0 : user.rating.rating} />
              </div>


              <div className="flex flex-col gap-9 bg-[#F1F0EA] -mt-16 items-center w-full justify-center py-10">
                <h1 className="text-xl font-light drop-shadow-md">
                  Leave a Review
                </h1>
                <div className="flex flex-col drop-shadow-md rounded-lg items-center px-5 w-[40%] py-10 bg-white gap-10">
                  <input
                    type="text"
                    className="px-4 drop-shadow-md py-2 my-5 w-[80%] rounded-lg border-2 border-[#E0DDcf]"
                    placeholder="Message"
                    onChange={UpdateReviewMessage}
                  />
                  <RatingInput callback={UpdateRating} />
                  <button
                    onClick={Submit}
                    className="font-medium drop-shadow-md text-[#E84855] border-2 border-[#E84855] hover:text-white hover:bg-[#E84855] hover:scale-110 active:scale-105 active:bg-[#8a2931] active:border-[#8a2931] rounded-full px-4 py-[.35rem] duration-150"
                  >
                    Submit
                  </button>
                </div>
              </div>


              <div className="flex flex-col gap-10 pb-10">
                {reviews.length > 0
                  ? reviews.map((x) => <ReviewCard review={x} deleteCallback={DeleteReview} />)
                  : "No Reviews Yet"}
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default PublicProfilePageContent;
