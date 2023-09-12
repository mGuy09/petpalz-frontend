import React, { useEffect } from 'react'
import SettingsContent from '../Components/UserRelatedPages/SettingsContent'
import { useNavigate } from 'react-router'
import { useAtom } from 'jotai'
import { Authenticated } from '../StateManagement/State'

const UserSettings = () => {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useAtom(Authenticated)
  useEffect(()=>{
    if(loggedIn === 'false') navigate('/login', {replace: true})
  },[loggedIn])
  
  return (
  <div><SettingsContent/></div>
  )
}

export default UserSettings