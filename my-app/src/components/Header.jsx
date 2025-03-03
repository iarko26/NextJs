"use client"
import React from "react"
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@/context/ThemeContext";
export default function Header(){
    const {theme,toggleTheme}=useTheme()
    return(
        <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          {theme === "light" ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
        </Toolbar>
              

        </AppBar>
    )


}
