import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [numberallocation,setnumberAllocation]=useState(false);
  const[specialchar,setspacialchar]=useState(false);
  const[password,setpassword]=useState("")
  const[passlen,setpasslen]=useState(8)
  const copy=useRef(null)



const passwordgenrate=useCallback(()=>{
  let char;
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdcefghijklmnopqrstuvwxyz"
  let pass=""

  if(numberallocation === true) {
    str+="1234567890"
  }
  
  if(specialchar === true){
    str += "~!@#$%^&*(){}"
  } 

  for (let i=0; i<passlen; i++) {
   
    
  char = Math.floor(Math.random() * str.length  )

  
  pass += str[char]  

}

setpassword(pass)

},[passlen,specialchar,numberallocation])


useEffect(()=>{
  passwordgenrate()
},[passlen,specialchar,numberallocation])
  return (
    <>
    <div className='bg-white'>
    <input type="text" className='bg-amber-50 mx-1.5'  value={password}/>
    <button ref={copy} onClick={()=>{
   //   copy.current.selected()
      window.navigator.clipboard.writeText(password)
    }}>copy</button>
    <br>
    
    </br>
    number<input type="checkbox" name="" id="" onChange={()=>{
      setnumberAllocation((prev)=>!prev)
    }} />
    specialcharcter<input type="checkbox" name="" id=""  onChange={()=>{
    setspacialchar((prev)=>!prev)
    }}/>
</div>
  
    </>
  )
}

export default App
