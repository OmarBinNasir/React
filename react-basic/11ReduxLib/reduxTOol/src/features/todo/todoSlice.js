import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState =  {
    todos:[{ id:1, text: "HEllo World"}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload  // or action.payload since text short hand method
            }
            console.log(action)
            state.todos.push(todo)
            console.log(state.todos);
            
        },
        removeTodo: (state, action) => {
            
           state.todos = state.todos.filter((todo)=>(
                todo.id !== action.payload
           ))
            console.log(state.todos)
        },
        updateTodo: (state,action) => { 
            state.todos = state.todos.map((todo) => {
                todo.id === action.payload.id ? { ...todo, text: action.payload.text} : todo
            })
        },  // icon on Todos of edit, when clicked AddTodo will updatee that todo ( button changes to add todo)

    }
})

export const { removeTodo, updateTodo, addTodo } = todoSlice.actions 

export default todoSlice.reducer