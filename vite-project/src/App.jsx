import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Events from './Pages/Events'
import Adevents from './Pages/Adevents'
import Allbookings from './Pages/Allbookings'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='allevents' element={<Events />}></Route>
          <Route path='addevents' element={<Adevents />}></Route>
          <Route path='allbookings' element={<Allbookings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App