import React, { useEffect, useState } from "react";
import ChatUserList from "./ChatUserList";
import ChatUser from "./ChatUser";
import { IoIosSend, IoMdSend } from "react-icons/io";
import axios from "axios";
import ChatMessagesContainer from "./ChatMessagesContainer";
import { useParams } from "react-router";
import { useAtom } from "jotai";
import { Authenticated } from "../../StateManagement/State";


const ChatContent = () => {
  const [loggedIn,setLoggedIn] = useAtom(Authenticated)
  const [currentUser, setCurrentUser] = useState();
  const [users, setUsers] = useState([])
  const [chats, setChats] = useState([])
  const params = useParams();
  useEffect(()=>{
    if(loggedIn ==='true')
    axios.get('https://localhost:7105/api/Users/CurrentUser', {withCredentials: true}).then(res => {
      setCurrentUser(res.data)
      console.log(res.data)
    })
  },[])

  useEffect(()=>{
    if(currentUser)
    axios.get('https://localhost:7105/api/Chats', {withCredentials: true}).then(res => {
      setChats(res.data)
    })
  },[])

  useEffect(()=>{
    chats.forEach(element => {
      axios.get(`https://localhost:7105/api/Users/GetById/${element.userId2}`, {withCredentials:true}).then(response => {
        console.log(response)
        setUsers(prev => [...prev, response.data])})
    });
  },[chats])

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
