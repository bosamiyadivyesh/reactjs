import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[
        {
            id:1,
            text:"hello"
        }
    ]
}
export const todoslice=createSlice({
    name:"todos",
    initialState,
    reducers:{
    addtodo:(state,action)=>{
        const newtodo={
            id:nanoid(),
            text:action.payload.text.length > 0 ? action.payload.text :" untitled"
        }
        state.todos.push(newtodo)
        
    },
    removetodo:(state,action)=>{
        state.todos=state.todos.filter((todo)=> todo.id !== action.payload)
    },
    updatetodo:(state,action)=>{
        const{id,text}=action.payload
        const existingtodo=state.todos.find((todo)=>todo.id === id)
        if(existingtodo){
            existingtodo.text=text
        }
    }
}
})

export const {addtodo,removetodo,updatetodo}=todoslice.actions
export default todoslice.reducer