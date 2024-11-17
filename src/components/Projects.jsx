import React from "react";
import Photo3 from "../assets/Photo3.jpg";
import Photofrom2 from "../assets/Photofrom2.jpg";
import Photofrom from "../assets/Photofrom.jpg";

const projects = [
  {
    id: 1,
    technologies: "MERN Stack",
    image: Photo3,
    github: "https://drive.google.com/file/d/14-wHNys7fJrHuQ1pNRqvxIYH3WoeZeu8/view",
  },
  {
    id: 2,
  
    technologies: "MERN Stack",
    image: Photofrom2,
    github: "https://drive.google.com/file/d/143PyS0emmnuz1OeouhEuUXzxzsH2ngA3/view",
  },
  {
    id: 3,
   
    technologies: "MERN Stack",
    image: Photofrom,
    github: "https://drive.google.com/file/d/13xN3MMMJzDpB2dUv9i0lP-TTg3XwHHEi/view",
  },
  
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">view</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
