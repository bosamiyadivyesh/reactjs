import { useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import User from './component/User'
import Header from './component/Header'
import Footer from './component/Footer'
import Layout from './Layout'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
  {/*   <Header/> */}
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user' element={<User/>}/>

    </Route>
    </Routes>

    {/* <Footer/>  */}
    </BrowserRouter>
    </>
     )
}

export default App
