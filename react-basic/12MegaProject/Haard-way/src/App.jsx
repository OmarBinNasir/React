import React,{ useState, useEffect } from 'react'
import { authService } from './appwrite/Auth'
import { login, logout} from "./store/authSlice"
import { useDispatch } from "react-redux"
import './App.css'
import { Header, Footer } from './components'
import { Outlet } from "react-router-dom"



function App() {

  const [loading, setLoading] = useState(false)  // when app loads, checks if user is logged in or not

  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()                // the login or not will be fetched from backend
    .then((userData)=>{
      if(userData)
       dispatch(login({ userData }))            // reducer setting status to true and store has access to whole app
      else
        dispatch(logout())
    })
    .finally(() => setLoading(false))
  })

  return !loading ?
   <div className=" min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className="">
        <Header />
        <main>
      TODO:  { /* <Outlet /> */ }
        </main>
       
        <Footer />
    </div>
  </div> : null
}

export default App
