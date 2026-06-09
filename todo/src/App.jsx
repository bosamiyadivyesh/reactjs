import { useState } from 'react'
import { TodoProvider } from './context/todo'
import TodoForm from './component/TodoForm'
import TodoItem from './component/TodoItem'

function App() {
  const [count, setCount] = useState(0)
  const [todo,setTodo]=useState([])


  const AddTodo=(todo)=>{
    setTodo((prev)=>([{id:Date.now(),...todo},...prev]))
    
    
  }
  const UpdateTodo=(id,todo)=>{
    setTodo((prev)=>{
      return(
      prev.map((prevetodo)=>(
        prevetodo.id === id ? {...prevetodo,todo:todo} :prevetodo
      ))
    )})
  }

  const DeleteTodo=(id)=>{
    setTodo((prev)=>(
      prev.filter((todo)=>(
        todo.id !== id
      ))
    ))
  }
 
  const CompletedTodo=(id)=>{
    setTodo((prev)=>(
      prev.map((pervtodo)=>(
        pervtodo.id===id?{...pervtodo,completed:!pervtodo.completed} : pervtodo
      ))
    ))
  }
  return (
    <>
    <TodoProvider value={{todo,AddTodo,UpdateTodo,DeleteTodo,CompletedTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {todo.map((todo)=>(
                        <div key={todo.id} className='w-full'>
                          
                          <TodoItem todo={todo}/>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
    </>
  )
}

export default App
