import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react'
import App from './App.jsx'


const element=React.createElement(   // this method wrok inside recat the reract ccreate object this type of
  'a',
  {href:'www.google.com'},
  'clickme'  
)

let Helloword=()=>(<h2>Hello Divyesh</h2>  // this  method work and yaaaa appp method work
)
createRoot(document.getElementById('root')).render(
  <>
{/* <Helloword/>   */}
<App/>

</>
)
/**
 * hear we lern how react create our elment in html means conver our code in to html 
 * 3 metthos all cover two method cover inn main and one methos is in app import,export
 * 
 * 
 */