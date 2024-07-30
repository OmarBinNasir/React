import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card.jsx'


function App() {
  

  let myObj = {
    age:21,
    name:"badBOy"
  }
  let newArr = [1,23,3]
  return (
    <>
      
      <h1 className="bg-green-600 text-black rounded-br-full rounded-tl-full font-medium mb-4 ">Tailwind Test</h1>
      <Card channel="fuhrer hii" obj={myObj} arr={newArr} buttonText="pls click kro"/> //this is how objects are passed to props
      <Card channel= "hello sir" />

    </>
    
  )
}

export default App
