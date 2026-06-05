import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
    <button onClick={()=> setColor("red")}>Red</button>
    <button onClick={()=> setColor("blue")}>blue</button>
    <button onClick={()=> setColor("green")}>green</button>
   
<body style={{backgroundColor:color}}></body>
    </>
  )
}

export default App
