import React, { useEffect, useState } from "react";
import ChatUserList from "./ChatUserList";
import ChatUser from "./ChatUser";
import { IoIosSend, IoMdSend } from "react-icons/io";
import axios from "axios";
import ChatMessagesContainer from "./ChatMessagesContainer";
import { useParams } from "react-router";


const ChatContent = () => {

  const [currentUser, setCurrentUser] = useState();
  const [users, setUsers] = useState([])
  const [chats, setChats] = useState([])
  const params = useParams();
  useEffect(()=>{
    axios.get('https://localhost:7105/api/Users/CurrentUser', {withCredentials: true}).then(res => {
      setCurrentUser(res.data)
      console.log(res.data)
    })
  },[])

  useEffect(()=>{
    axios.get('https://localhost:7105/api/Chats', {withCredentials: true}).then(res => {
      setChats(res.data)
    })
  },[])

  useEffect(()=>{
    chats.forEach(x => {
      console.log(x)
    })
  },[currentUser])

  return (
    <div className="bg-[#c0bdad]  flex items-center justify-center h-[100vh] w-full">
      <div className="bg-white w-[90rem] h-[45rem] rounded-xl shadow-lg shadow-[#868475]/80 grid grid-cols-4">
        <ChatUserList users={users}/>
        <ChatMessagesContainer/>
        <ChatUser/>
      </div>
    </div>
  );
};

export default ChatContent;
