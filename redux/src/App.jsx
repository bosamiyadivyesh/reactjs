import { useState } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { addtodo,removetodo,updatetodo } from './feutures/todoslice'
import { store } from './app/store'
import './App.css'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function App() {
  const [input, setInput] = useState('')
  

  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)
  const addinput = () => {

    dispatch(addtodo({text:input}))
   // console.log(todos);
    
    setInput('')
  }


  
  return (
    <>
    <Provider store={store}>
      <div>
        <input 
        type="text"
        placeholder='enter todo'
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button onClick={addinput}>
          Add Todo
        </button>
      </div>
<div>
  <TodoItem/>
</div>
    
    </Provider>
    </>
  )
}

export default App
