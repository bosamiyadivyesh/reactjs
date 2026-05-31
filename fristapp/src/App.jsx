import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
let [counter,setCounter]=useState(0)
let incress=()=>{
  setCounter(counter+1)
  
}

let decress=()=>{
 
  if(counter>0){
  setCounter(counter-1)
  }
  else{
    alert("value can not assign negative please clik incress button")
      
    
  }
}
  return (
    <>
<button onClick={incress} id="inc">Incress</button>
<button onClick={decress} disabled={counter === 0} id="dec">decress</button> {/** evry time check and work */}
<h1>{counter}</h1>
  </> 
  ) 
  
}

export default App
/** 
 * hear two way to solve nagative problem 
 * 1)use if else controlle in decress methos 
 * 2)use disabled method in html use indside decress button ={counter === 0} then it automatocaly disable buttton in when incress the function then condition is falsxe and butt work properly
 * 2)method us beeteer 
 */