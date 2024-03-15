import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import{BrowserRouter,Route,Routes} from "react-router-dom"
import SignUp from './Components/SignUp'
import Home from './Components/LoginSignup/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Login/>}></Route>
        <Route path='/SignUp' element ={<SignUp/>}></Route>
        <Route path='/Home' element ={<Home/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
