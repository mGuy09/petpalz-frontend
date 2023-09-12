import React, { useEffect } from 'react'
import ChatContent from '../Components/ChatPage/ChatContent'
import { useNavigate } from 'react-router'
import { Authenticated } from '../StateManagement/State'
import { useAtom } from 'jotai'

const ChatPage = () => {
  const [loggedIn, setLoggedIn] = useAtom(Authenticated)
  const navigate = useNavigate()
  useEffect(()=>{
    if(loggedIn === 'false') navigate('/login', {replace: true})
  },[loggedIn])
  return (
    <ChatContent/>
  )
}

export default ChatPage