import { useState } from 'react'
import { useTodo } from './context/TodoContext'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev) => [ { id: Date.now(), ...todo }, ...prev] )  // spread operator adds this new object to prev todos
  }

  const updateTodo = (todo,id) => {
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id===id? todo: prevTodo ))
  }

  const deleteTodo = (id) =>{
    setTodos((prev)=> prev.filter((todo)=>{
    return !(todo.id===id)
    }))
  }
  const toggleComplete = (id) => {
    setTodos((prev)=>prev.map((prevTodo)=>{
      prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed}: prevTodo 
    }))
   }

  return (
    <></>
  )
}

export default App
