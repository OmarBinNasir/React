import React from 'react'
import { authService } from "../../appwrite/Auth.js"
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
    <button className=" inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full ">Logout</button>
  )
}

export default LogoutBtn