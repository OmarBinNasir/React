import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    
    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({Username,Password})
    }
  return (
    <div>
    <h2> login </h2>
    <input type="text" 
    value={Username}
    onChange={(e)=>{
        setUsername(e.target.value)
    }}
     placeholder="username" />
    <input
    type="text" 
    value={Password}
    onChange={(e)=>{
        setPassword(e.target.value)
    }}
    placeholder="password" />
    <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login