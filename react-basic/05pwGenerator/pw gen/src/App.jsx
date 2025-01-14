import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllow,setNumberAllow] = useState(false)
  const [characterAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  // use ref
  const passwordRef = useRef(null) // this will keep eye on the input 

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()  // to give blue select effect
    //passwordRef.current.setSelectionRange(0,3) // selection range 0-3 only first 3 characters
    window.navigator.clipboard.writeText(password)
  },[password]) // without using ref or useRef

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow)
      str+="0123456789"
    if(characterAllow)
      str+= "!@#$%^&*"

    for(let i =1; i<=length ; i++){
      const charIndex = Math.floor(Math.random() * str.length + 1) 
      pass+=str.charAt(charIndex)
    }
    setPassword(pass)
  }
    ,[length,numberAllow,characterAllow,setPassword])

  
  useEffect( ()=>{
    passwordGenerator()
  }, [length,numberAllow,characterAllow, setPassword]  )

  return (
   <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-400 bg-gray-800">
     <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
      <input
        className="outline-none w-full py-1 px-3"
        type="text"
        placeholder='Password'
        value={password}
        readOnly
        ref={passwordRef} // input can talk with the 

      />
      <button
      className="px-4 text-white bg-orange-500"
      onClick={copyPasswordToClipboard}>copy</button> 
    </div>
    <div className="flex flex-wrap justify-evenly  ">
     <div>
      <input
        type="range"
        min={6}
        max={100}
        value= {length}
        className="cursor-pointer mx-2"
          onChange={(e)=>{
            setLength(e.target.value)
          }}
        />
        <label>Length: {length} </label>
     </div>
     <div className="flex items-center gap-x-1 ">
        <input
          className = ""
          type="checkbox"
          onChange = {
            ()=>{
              setCharAllow((prev)=>!prev)
            }
          }
        />
        <label>characters</label>
     </div>
     <div className="flex items-center gap-x-1">
        <input
          className = ""
          type="checkbox"
          onChange={() => setNumberAllow(!numberAllow) }
          
        />
        <label>numbers</label>
     </div>
      
    </div>
   </div>
  )
}

export default App
