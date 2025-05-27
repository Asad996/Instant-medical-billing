
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Medicalbilling from './Pages/Medicalbilling'




function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/medical-billing' element={<Medicalbilling/>} />


    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
