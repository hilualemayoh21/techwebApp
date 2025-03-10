import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router , Route, Routes  } from 'react-router-dom'
import Projects from "./components/Projects"
import OurServices from './components/OurServices'
import Testimonial from './components/Testimonial'
import Home from './Pages/Home'

function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    
      
    </>
  )
}

export default App
