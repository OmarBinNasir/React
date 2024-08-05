import React,{ useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)
  
  if(!user)
    return (<>pls login</>)

  return (
    <div>
      welcome mr {user.Username}
    </div>
  )
}

export default Profile