import React, { createContext, useContext } from "react";

export const todocontext=createContext({
    todo:[{
        id:1,
        todo:"divyesh",
        Completed:false
    }],
    AddTodo:(todo)=>{},
    UpdateTodo:(todo,id)=>{},
    DeleteTodo:(id)=>{},
    CompletedTodo:(id)=>{}
})

export const TodoProvider=todocontext.Provider


export function usetodo(){
    return useContext(todocontext)
}