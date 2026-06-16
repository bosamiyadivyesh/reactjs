import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removetodo, updatetodo } from './feutures/todoslice'
function TodoItem() {
  const todos = useSelector((state) => state.todos)
   const dispatch = useDispatch()
   const updateTodo = (id, text) => {
    dispatch(updatetodo({id, text}))
   }
  return (
    <>
    <div>TodoItem</div>
      <div>
        <ul>
          {todos.todos.map((todo) => (
            <li key={todo.id}>{todo.text}
            <button onClick={() => updateTodo(todo.id, prompt('Enter new text:'))}>Edit</button>
            <button  onClick={()=>dispatch(removetodo(todo.id))}>Delete</button>
            </li>
          ))}
        </ul>
       
      </div>
  </>
  )
}

export default TodoItem