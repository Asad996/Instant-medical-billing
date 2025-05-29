
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import ServicePage from './Pages/ServicePage'





function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/servicespage/:serviceId' element={<ServicePage} />


    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
