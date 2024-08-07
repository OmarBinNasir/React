import { useContext, createContext} from "react"

export const TodoContext = createContext({
   todos:
    [
        
        {
            todo:"todo msg here",
            id:1,
            completed:false
        }
        
    ],
    addTodo : (todo)=>{},
    deleteTodo : (id)=>{},
    updateTodo : (todo, id) => { },
    toggleComplete : (id) => { }
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
