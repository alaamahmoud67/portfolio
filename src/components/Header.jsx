import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbWorldCode } from 'react-icons/tb';
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import  menu  from '../assets/menu.svg'
import close from '../assets/close.svg'
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>

    
  
<nav className="flex justify-between text-white px-6 py-5 bg-black">
  <Link className="navbar-brand" to="/">
    <h2 className="logo text-2xl">Mohamed</h2>
  </Link>
  <ul className="md:flex hidden items-center gap-10">
    <li className="font-semibold hover:text-primary">
      <Link to="/" className="ul active">Home</Link>
    </li>
    <li className="font-semibold hover:text-primary">
      <Link to="#about" className="ul">About</Link>
    </li>
    <li className="font-semibold hover:text-primary">
      <Link to="#project" className="ul">Project</Link>
    </li>
    <li className="font-semibold hover:text-primary">
      <Link to="#skills" className="ul">Skills</Link>
    </li>
    <li className="font-semibold hover:text-primary">
      <Link to="#contact" className="ul">Contact </Link>
    </li>
   
  </ul>

  {/* Mobile Nav */}
  <ul
    className={`fixed top-0 z-50 bg-black text-white w-2/3 h-screen shadow-2xl
      md:hidden flex flex-col gap-10 text-medium p-7 pt-20 duration-500
      ${open ? "right-0" : "right-[-100%]"}`}
  >
    <li className="font-semibold hover:text-primary">
      <Link to="/" className="ul active">Home</Link>
    </li>
    <li className="font-semibold hover:text-primary">
      <Link to="#about" className="ul">About</Link>
    </li>
    <li className="font-semibold hover:text-primary">
      <Link to="#project" className="ul">Project</Link>
    </li>
    <li className="font-semibold hover:text-primary">
      <Link to="#skills" className="ul">Skills</Link>
    </li>
    <li className="font-semibold hover:text-primary">
      <Link to="#contact" className="ul">Contact </Link>
    </li>
  </ul>

  <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
    <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
  </div>
</nav>
    
        
        
        
        
        </>
  )
}
