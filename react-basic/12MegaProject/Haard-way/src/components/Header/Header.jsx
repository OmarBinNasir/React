import React from 'react'
import { Container, LogoutBtn, Logo} from "../index"
import { Link } from "reacter-router-dom"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-redux"


function Header() {
  const authStatus = useSelector((state) => state.auth.status )  // checks wether user is logged in or not

  const navigate = useNavigate()  // like link 

  const navItems = [
    {
      name: "Home",
      slug: "/",    // url or slug
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-post",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus
    }
  ]

  return (
    <header className=" py-3 shadow bg-gray-500">
    <Container>
      <nav>
        <div className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px"/>
            </Link>
          </div>
        </div>
        <ul className='flex ml-auto'>
          { navItems.map((item)=>(
            item.active ? (
              <li key={item.name}>
                <button
                onClick={ ()=> navigate(item.slug) }   // you can use Link or navigate slug is the route
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ): null 
          )) }
          { authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </Container>
    </header>
  )
}

export default Header