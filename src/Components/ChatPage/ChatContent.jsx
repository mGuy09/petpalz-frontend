import React, { useEffect, useState } from "react";
import ChatUserList from "./ChatUserList";
import ChatUser from "./ChatUser";
import axios from "axios";
import ChatMessagesContainer from "./ChatMessagesContainer";
import { useParams } from "react-router";
import { useAtom } from "jotai";
import { Authenticated } from "../../StateManagement/State";


const ChatContent = () => {
  const [loggedIn, setLoggedIn] = useAtom(Authenticated)
  const [currentUser, setCurrentUser] = useState();
  const [users, setUsers] = useState([])
  const [chats, setChats] = useState([])
  const [selectedUser, setSelectedUser] = useState()
  const params = useParams();
  useEffect(() => {
    if (loggedIn === 'true')
      axios.get('https://localhost:7105/api/Users/CurrentUser', { withCredentials: true }).then(res => {
        setCurrentUser(res.data)
        console.log(res.data)
      })
  }, [])

  useEffect(() => {
    if (currentUser)
      axios.get('https://localhost:7105/api/Chats', { withCredentials: true }).then(res => {
        setChats(res.data)

      })
  }, [currentUser])

  useEffect(() => {
    if (users.length < 1)
    console.log(users)
      chats.forEach((element, i) => {
        axios.get(`https://localhost:7105/api/Users/GetById/${element.userId2}`, { withCredentials: true }).then(response => {
          if(i === 0){
            setUsers([response.data])
          }else{
            setUsers(prev => [...prev, response.data].sort((a, b) => a.firstName < b.firstName))
          }
        })
      });
  }, [chats])

  useEffect(() => {
    console.log(params.chatId)
    if (params.chatId !== 'home') {
      axios.get('https://localhost:7105/api/Users/GetById/' + params.chatId, { withCredentials: true }).then(res => {
        console.log(res.data)
        setSelectedUser(res.data)
      })
    }

  }, [params.chatId])

  return (
    <div className="bg-[#c0bdad]  flex items-center justify-center h-[100vh] w-full">
      <div className="bg-white w-[90rem] h-[45rem] rounded-xl shadow-lg shadow-[#868475]/80 grid grid-cols-4">
        <ChatUserList users={users} />
        <ChatMessagesContainer />
        <ChatUser user={selectedUser} />
      </div>
    </div>
  );
};

export default ChatContent;
