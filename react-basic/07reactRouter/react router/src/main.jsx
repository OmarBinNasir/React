import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import './index.css'
import { Layout } from './Layout.jsx'
import Home from '../components/Home/Home.jsx'
import { About } from '../components/AboutUs/AboutUs.jsx'
import Contact from '../components/Contact/Contact.jsx'
import { User } from '../components/User/User.jsx'
import { Github, githubInfoLoader } from '../components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",  // in first route element will be rendered
//     element: <Layout />, 
//     children: [  // for basic route only path and element is required
//       {
//         path: "/",
//         element: <Home />
//       }, 
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   }
// ])  // First way of declaring routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/user/:userId" element={<User />}/>
      <Route
      loader={githubInfoLoader}
       path='github' element={<Github />} />
    </Route> // nested routes

  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
