import { useEffect } from 'react'

import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

import Service from './components/Service'
import Aos from 'aos';
import 'aos/dist/aos.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Project from './components/Project'
import Contactus from './components/Contactus'

function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();
  }, [])
  return (
    <div>
        
      
       
        
        
       <Router>
       <Header/>
       <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={ <About />} />
            <Route path="/skills" element={<Service />} />
            <Route path="/contact" element={ <Contactus/>} />
            <Route path="/project" element={<Project/>} />

          </Routes>
          <Footer/>
       </Router>
        
    </div>
  )
}

export default App
