"use client"

import React, { createContext, useContext,useEffect,useState} from "react"
const ThemeContext=createContext()
export const useTheme=()=>useContext(ThemeContext)
export const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState("light")
    useEffect(()=>{
        const saveTheme=localStorage.getItem("theme") || "light"
        setTheme(saveTheme)
        document.documentElement.classList.toggle("dark", saveTheme === "dark")

    },[])
    const toggleTheme=()=>{
        const newTheme=theme==="light"?"dark":"light"
        setTheme(newTheme)
        localStorage.setItem("theme",newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")


    }
    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
    )
}

