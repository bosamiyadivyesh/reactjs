import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home.jsx'
import Contact from './component/Contact.jsx'
import About from './component/About.jsx'
import User from './User.jsx'
import Github, { githubloder } from './component/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>

//       },
//       {
//         path:"about",
//         element:<About/>

//       },
//       {
//         path:"contact",
//         element:<Contact/>

//       }
    

//     ]
    
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="user/:userid/:username" element={<User/>}/>
    <Route
     loader={githubloder}
    path="github" 
    element={<Github/>}/>
  
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
  </StrictMode>,
)
