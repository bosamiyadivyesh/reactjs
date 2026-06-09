import { createContext,useContext } from "react";


export let ThemeContext=createContext({
    thememod:"light",
    changethem:(value)=>{},

    
})

export const ThemeProvider=ThemeContext.Provider

export default function UseThem(){
    return(useContext(ThemeContext))
}