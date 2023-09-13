import axios from "axios";
import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router";

const ReviewCard = ({ review, deleteCallback }) => {
  const [user, setUser] = useState();
  const [currentUser, setCurrentUser] = useState()
  const [Delete, setDelete] = useState(false);
    const [modal, setModal] = useState(false);
    const navigate = useNavigate()
    
    const DeleteReview = () => {
        axios.delete(`https://localhost:7105/api/Reviews/${review.id}`, { withCredentials: true }).then(res => {
            setModal(false)
            deleteCallback(review.id)
        })
    }
  useEffect(() => {
    axios
      .get(`https://localhost:7105/api/Users/GetById/${review.postUserId}`)
      .then((res) => {
        console.log(res)
        setUser(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://localhost:7105/api/Users/CurrentUser", {
        withCredentials: true,
      })
      .then((res) => {
        setCurrentUser(res.data)
        if (res.data.id === review.postUserId) {
          setDelete(true);
        } else {
          setDelete(false);
        }
      });
  }, [user]);
  if (user)
    return (
      <div id={review.id} className="flex flex-col gap-6 shadow-md group w-[30rem] bg-white p-5">
        <div className="flex justify-between items-center">
          <div onClick={()=>{currentUser.id === review.postUserId ? navigate('/user') : navigate(`/profile/${user.userName}`)}} className="flex gap-5 peer cursor-pointer items-center">
          <div className="w-[5rem] peer-hover:scale-110 duration-150 drop-shadow-md">
            <img src={user.profilePicUrl} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-light duration-150 peer-hover:scale-105 drop-shadow-md">
              {user.firstName} {user.lastName}
            </p>
            <p className="font-medium drop-shadow-md">{user.serviceType.name}</p>
          </div>
          </div>
          <AiFillDelete
            onClick={() => setModal(true)}
            size={30}
            className={`text-[#e94c4c] cursor-pointer hover:scale-125  active:scale-110 duration-150 invisible ${
              Delete ? "group-hover:visible" : ""
            }`}
          />
        </div>
        <div className="w-full h-[2px] rounded-full bg-[#c4c0b1]"></div>
        <div className=" drop-shadow-md flex gap-3 text-center items-center px-10 pb-2 text-xl">
           {review.name}
          {review.name
            .substring(review.name.length - 1)
            .includes("." || "!" || "?")
            ? ""
            : "."}
        </div>
        <div className="w-full flex pb-10 justify-center">
          <Rating ratingValue={review.rating} />
        </div>

        {/* Modal */}
        <div
          className={`fixed flex flex-col justify-around items-center shadow-xl shadow-black/40 rounded-lg p-10 w-[30rem]  bg-[#F1F0EA] z-20 top-[30%] h-[15rem] ${
            modal ? "visible" : "hidden"
          }`}
        >
          <p className="font-medium text-lg drop-shadow-md">
            Are you sure you want to delete this review?
          </p>
          <div className="flex gap-5">
            <button
              onClick={() => {
                DeleteReview();
              }}
              className="px-4 py-1 border-2 drop-shadow-md border-[#E84855] hover:scale-110 duration-150 text-white hover:bg-[#94232d] bg-[#e84855] hover:border-[#94232d] active:scale-100 rounded-full"
            >
              Delete
            </button>
            <button
              onClick={() => setModal(false)}
              className="px-4 py-1 text-[#a19d89] border-2 drop-shadow-md border-[#cec8b1] hover:scale-110 duration-150 hover:text-white hover:bg-[#cec8b1] active:scale-100 rounded-full"
            >
              Cancel
            </button>
          </div>
        </div>
        <div
          className={`fixed h-screen w-screen bg-black/60 top-0 z-10 left-0 ${
            modal ? "visible" : "hidden"
          }`}
          onClick={() => setModal(false)}
        ></div>
      </div>
    );
  return "";
};

export default ReviewCard;
