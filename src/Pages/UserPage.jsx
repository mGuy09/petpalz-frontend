import React, { useEffect, useState } from 'react'
import UserContent from '../Components/UserRelatedPages/UserContent'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useAtom } from 'jotai'
import { Authenticated } from '../StateManagement/State'

const UserPage = () => {
  const [user, setUser] = useState()
  const [status, setStatus] = useState()
  const [ loggedIn, setLoggedIn] = useAtom(Authenticated)
  const navigate = useNavigate()
  useEffect(()=>{
    if(loggedIn === 'false') navigate('/login', {replace: true})
  },[loggedIn])
  
  useEffect(() => {
    if(loggedIn === 'true')
    axios.get('https://localhost:7105/api/Users/CurrentUser', { withCredentials: true }).then(res => {
      console.log(res)
      setUser(res.data)
    })
  }, [])
  useEffect(() => {
    if (user) axios.get(`https://localhost:7105/api/Status/${user.id}`, { withCredentials: true }).then(res => {
      console.log(res)
      setStatus(res.data)
    })
  }, [user])
  return (
    <div><UserContent user={user} status={status} /></div>
  )
}

export default UserPage