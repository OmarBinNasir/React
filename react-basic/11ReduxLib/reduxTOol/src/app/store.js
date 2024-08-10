import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"


export const store = configureStore({
    reducer: todoReducer  // todoReducer created to store reduceers in it there can be multiplle reducers
});