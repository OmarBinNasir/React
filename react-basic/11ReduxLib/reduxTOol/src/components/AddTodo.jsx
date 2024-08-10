import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState("")

    const dispatch = useDispatch()         // imported from react-redux

    const addTodoHandler = (e) => {
        e.preventDefault()              // prevents form getting submit auto
        dispatch( addTodo(input) )     // dispatch uses reducer to change value in store
                                      // methods need passes to dispatch thats why they were exported seperately
        setInput("")                 // this will clean the form, clean 
    } 

  return (
    <div className=" w-fit mr-auto ml-auto">
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  "
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
    </div>
  )
}

export default AddTodo