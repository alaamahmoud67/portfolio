import React from "react";
import AboutImage from "../assets/aboutme-image.png";
import Lottie from "lottie-react";
import '../App.css'

import Anima from '../assets/about.json'
import Projects from "./Projects";
const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <div className="flex-1">
            <h2 className="text-[2rem] md:text-5xl lg:text-2xl    font-bold mt-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-7">Who I am?</h2>
            <p className="text-lg mb-8">
            My name is mohamad. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.
            </p>
            
          </div>

          <div className='flex-1 w-full'>
          <Lottie 
    animationData={Anima}/>
          </div>
  
          
        </div>
      </div>
      <Projects/>
    </div>
  );
};

export default About;
