import { useState } from 'react'



function App() {
  const [color, setColor] = useState("olive")

  return (

    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="fixed bottom-12 flex flex-wrap inset-x-0 px-2 bg-gray-500 justify-center">
         <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white rounded-full">
          <button
          onClick={()=>{ setColor("red")}}
          className=" rounded-full px-4 py-1 outline-none text-white shadow-lg "
          style={{backgroundColor:'red'}}
          >red</button>
          <button
          className=" rounded-full px-4 py-1 outline-none text-white shadow-lg "
          style={{backgroundColor:'green'}}
          >green</button>
          <button
          className=" rounded-full px-4 py-1 outline-none text-white shadow-lg "
          style={{backgroundColor:'blue'}}
          >blue</button>
          <button
          className=" rounded-full px-4 py-1 outline-none text-white shadow-lg "
          style={{backgroundColor:'black'}}
          >black</button>
          <button
          className=" rounded-full px-4 py-1 outline-none text-white shadow-lg "
          style={{backgroundColor:'orange'}}
          >orange</button>
          <button
          className=" rounded-full px-4 py-1 outline-none text-white shadow-lg "
          style={{backgroundColor:'pink'}}
          >pink</button>
          
         </div>
      </div>
    </div>
    
  )
}

export default App
