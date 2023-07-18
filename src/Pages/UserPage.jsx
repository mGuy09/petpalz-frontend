import React, { useEffect, useState } from 'react'
import UserContent from '../Components/UserRelatedPages/UserContent'
import axios from 'axios'

const UserPage = () => {
  const [user, setUser] = useState()
  const [status, setStatus] = useState()
  useEffect(() => {
    axios.get('https://localhost:7105/api/Users/CurrentUser', { withCredentials: true }).then(res => {
      console.log(res)
      setUser(res.data)
    })
  }, [])
  useEffect(() => {
    if(user) axios.get(`https://localhost:7105/api/Status/${user.id}`, { withCredentials: true }).then(res => {
      console.log(res)
      setStatus(res.data)
    })
  },[user])
  return (
    <div><UserContent user={user} status={status} /></div>
  )
}

export default UserPage