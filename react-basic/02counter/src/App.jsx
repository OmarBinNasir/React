import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5 this variable wont display on the ui
  let [counter,setCounter]=useState(15)

  const addValue = () => {
    if(!(counter===20))
    counter++
    
    setCounter(counter)
    //console.log(counter)
  }
  const removeValue = () => {
    if(!(counter===0))
    counter--;
    
    setCounter(counter)
  }
  return (
    <>
      <h1>japan emperor died </h1>
      <h2>counter : {counter} </h2>
      <button
        onClick={addValue}
      >add the count</button>
      <button
      onClick={removeValue}>delete the count</button>
    </>
  )
}

export default App
