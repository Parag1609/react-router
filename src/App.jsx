import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header1/Header1'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import About from './components/about/About'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
     
    </>
  )
}

export default App
