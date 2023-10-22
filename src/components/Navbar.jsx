import React, {useState} from 'react'
import {BrowserRouter} from "react-router-dom";
import { Link } from 'react-scroll';
export default function Navbar() {
  const [clicked, setClick] = useState(false);
  const handleClick = () => setClick(!clicked);
  const closeMenu = () => setClick(false)
  return (
    
    <div className='flex flex-row fixed w-full justify-center space-x-20 bg-black text-white h-16 items-center'>
      <BrowserRouter>
            <nav>
                <ul className='flex flex-row justify-center space-x-20 items-center'>
                    <li className='cursor-pointer'><Link to='home' spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Home</Link></li>
                    <li className='cursor-pointer'><Link to='SkillSection' spy={true} smooth={true} offset={-70} duration={500}>Skills</Link></li>
                    <li className='cursor-pointer'><Link to='Projects' spy={true} smooth={true} offset={-70} duration={500}>Projects</Link></li>
                    <li className='cursor-pointer'><Link to='/CV'>CV</Link></li>
                </ul>
            </nav>
        </BrowserRouter>
    </div>
  )
}

