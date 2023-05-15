import React, { useEffect, useRef, useState } from 'react'
import PublicProfilePageContent from '../Components/UserRelatedPages/PublicProfilePageContent'
import axios from 'axios'

const PublicProfilePage = () => {
  const [user, setUser] = useState()
  const ref = useRef()
  console.log(ref)

  useEffect(() => {
    axios.get(`https://localhost:7105/api/Users/${ref.current.id}`).then((res) => {
      console.log(res);
      setUser(res.data);
    });
  },[])
  return (
    <>
      <PublicProfilePageContent user={user} />
    </>
  )
}

export default PublicProfilePage