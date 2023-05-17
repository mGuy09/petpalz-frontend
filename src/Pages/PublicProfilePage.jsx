import React, { useEffect, useState } from 'react'
import PublicProfilePageContent from '../Components/UserRelatedPages/PublicProfilePageContent'
import axios from 'axios'
import { useParams } from 'react-router'

const PublicProfilePage = () => {
  const [user, setUser] = useState()
  const [status, setStatus] = useState()
  const ref = useParams()

  useEffect(() => {
    console.log(ref)
    axios.get(`https://localhost:7105/api/Users/${ref.id}`).then((res) => {
      console.log(res);
      setUser(res.data);
    }).then(x => {
      axios.get(`https://localhost:7105/api/Status/${ref.id}`).then(res => {
        console.log(res)
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