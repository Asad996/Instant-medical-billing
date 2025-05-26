
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Servicespages from './Pages/Servicespages'



function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Servicespages/>} />

    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
