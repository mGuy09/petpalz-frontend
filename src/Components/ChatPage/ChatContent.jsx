import React, { useEffect, useState } from "react";
import ChatUserList from "./ChatUserList";
import ChatUser from "./ChatUser";
import axios from "axios";
import ChatMessagesContainer from "./ChatMessagesContainer";
import { useNavigate, useParams } from "react-router";



const ChatContent = () => {
  const [currentUser, setCurrentUser] = useState();
  const [userIds, setUserIds] = useState([])
  const [users, setUsers] = useState([])
  const [chats, setChats] = useState([])
  const [selectedUser, setSelectedUser] = useState()
  const params = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('https://localhost:7105/api/Users/CurrentUser', { withCredentials: true }).catch(e => { if (e.response.status === 400) navigate('/login') }).then(res => {
      setCurrentUser(res.data)
    })
  }, [])

  useEffect(() => {
    axios.get('https://localhost:7105/api/Chats', { withCredentials: true }).then(res => {
      setChats(res.data)
    })
  }, [currentUser])

  useEffect(() => {
    let idList = []
    if (chats.length !== 0 && userIds.length === 0) {
      if (currentUser)
        chats.forEach(element => {
          idList.push(element.userId1 === currentUser.id ? element.userId2 : element.userId1)
        })
      setUserIds(idList)
    }
  }, [chats])

  useEffect(() => {
    if (userIds.length !== 0 && users.length === 0) {
      userIds.forEach(element => {
        axios.get(`https://localhost:7105/api/Users/GetById/${element}`, { withCredentials: true }).then(res => {
          setUsers(prev => [...prev, res.data])
        })
      })
    }
  }, [userIds])

  useEffect(() => {
    if (params.chatId !== 'home') {
      axios.get('https://localhost:7105/api/Users/GetById/' + params.chatId, { withCredentials: true }).then(res => {
        setSelectedUser(res.data)
      })
    } else {
      setSelectedUser()
    }

  }, [params.chatId])

  return (
    <div className="bg-[#c0bdad]  flex items-center justify-center h-[100vh] w-full">
      <div className="bg-white w-[90rem] h-[45rem] rounded-xl shadow-lg shadow-[#868475]/80 grid grid-cols-4">
        <ChatUserList users={users} chatId={params.chatId} />
        <ChatMessagesContainer />
        <ChatUser user={selectedUser} />
      </div>
    </div>
  );
};

export default ChatContent;
