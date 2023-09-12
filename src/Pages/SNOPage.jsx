import React, { useEffect } from 'react'
import SNOContent from '../Components/SitterAndOwnersPage/SNOContent'
import { useNavigate } from 'react-router'
import { useAtom } from 'jotai'
import { Authenticated } from '../StateManagement/State'

const SNOPage = () => {
  window.scroll(0,0)
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useAtom(Authenticated)
  useEffect(()=>{
    if(loggedIn === 'false'){
      navigate('/login', {replace: true})
    }
  },[loggedIn])
  return (
    <div className="bg-[#F1F0EA] w-full">
      <SNOContent />
    </div>
  );
}

export default SNOPage