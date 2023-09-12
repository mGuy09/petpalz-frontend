import React, { useEffect, useState } from 'react'
import PublicProfilePageContent from '../Components/UserRelatedPages/PublicProfilePageContent'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'

const PublicProfilePage = () => {
  const [user, setUser] = useState()
  const [status, setStatus] = useState()
  const navigate = useNavigate()
  if(!localStorage.getItem('Auth')){
    navigate('/login')
  }
  const ref = useParams()

  useEffect(() => {
    axios.get(`https://localhost:7105/api/Users/GetByName/${ref.name}`).then((res) => {
      setUser(res.data);
    }).then(x => {
      axios.get(`https://localhost:7105/api/Status/${ref.name}`).then(res => {
        setStatus(res)
      })
    })
  },[])
  return (
    <>
      <PublicProfilePageContent user={user} status={ status } />
    </>
  )
}

export default PublicProfilePage