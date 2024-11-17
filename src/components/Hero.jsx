import React from 'react'
import HeroImage from '../assets/hero-image.webp'
import '../App.css'
import Star from './Star'
import About from './About'
import Service from './Service'

import Contact from './Contact'
import { Link } from 'react-router-dom'
import Project from './Project'
const pdf='http://localhost:5173/../assets/cv.pdf'
const Hero = () => {

  const download =(url)=>{

  }
  return (
   
    <div className='bg-black' >
   
       <Star/>

   <div className='bg-black text-white text-center py-16 relative z-20 ' data-aos="zoom-in-up">
      <div className='ab '>
      <img src={HeroImage} alt="" 

className='mx-auto mb-8 w-full h-full '/>
      </div>
      
      <h1 className='text-4xl font-bold z-20 mt-11' >
         I'm {" "}
         <span className='text-transparent logo' >mohamad Alkak</span>
        
     </h1>
     <h1 className="text-[2rem] md:text-5xl lg:text-6xl  text-center font-bold mt-16 text-transparent logo">full stack Developer</h1>
     <p className="text-base md:text-3xl text-gray-300 text-center mt-4">
         I specialize in building modern and full stack.
     </p>
     <div className='mt-8 space-x-4'>
     
         
     <Link to="https://drive.google.com/file/d/16LHy6ayD0o-hGMvuKZmcn8l4_lmhZyHA/view" >
     <button  className='button' style={{backgroundColor:"transparent",color:"#fff",border:"2px solid #725AC1"}}>View My CV Here!</button>
     </Link> 
          
          <a href="#contact">
          <button className='button'>view projects</button>
          </a>
                  

     </div>

 </div>
 <About/>

 <Service/>
<Project/>
 <Contact/>
 
    </div>

 
 



    
  )
}

export default Hero