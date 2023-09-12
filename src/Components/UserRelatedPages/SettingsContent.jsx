import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SettingsContent = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    axios.get('https://localhost:7105/api/Users/CurrentUser', { withCredentials: true }).then(res => {
      setUser(res.data)
    })
  }, [])
  if (user) {
    return (
      <div className='flex flex-col items-center justify-center gap-16 p-20 pt-32 bg-[#F1F0EA] h-full w-full'>
        <div className='w-[80rem] h-[50rem] bg-white'>
          <div>
            <h1>User Settings</h1>
          </div>
          <div>

          </div>
        </div>
      </div>
    )
  }

}

export default SettingsContent