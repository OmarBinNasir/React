import React from 'react'
import Footer from "../components/Footer/Footer.jsx"
import Header from "../components/Header/Header.jsx"
import { Outlet } from "react-router-dom"

 function Layout() {
    return (
        <>
            <Outlet />
            <Header />
            <Footer />   
        </>
    )
}
export { Layout }