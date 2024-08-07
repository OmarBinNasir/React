import { createContext,useContext } from "react"


export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}  // by using such syntax, no need to create two files and importing of useContext and context variable wont be required9