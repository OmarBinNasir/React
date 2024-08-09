import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState =  {
    todos:[{ id:1, text: "HEllo World"}]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text  // or action.payload since text short hand method
            }
            state.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos.filer((todo)=>{
                todo.id !== action.payload
            })
        },
        updateTodo: (state,action) => { 
            state.todos.map((todo) => {
                todo.id === action.payload.id ? { ...todo, text: action.payload.text} : todo
            })
        },

    }
})

export const { removeTodo, updateTodo, addTodo } = todoSlice.actions 

export default todoSlice.reducer