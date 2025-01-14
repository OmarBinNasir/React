import React from 'react'
<<<<<<< HEAD
import { authService } from "../../appwrite/Auth.js"
=======
import  authService  from "../../appwrite/Auth"
>>>>>>> 3e59670a7c5d05b72465e5b3dc94a9b651565014
import { useDispatch } from "react-redux"
import { logout } from "../../store/authSlice"


function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()           // appwrite provides promises 
        .then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className=" inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full "
    onClick={ logoutHandler }>Logout</button>
  )
}

export default LogoutBtn