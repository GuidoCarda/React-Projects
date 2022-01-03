import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { FaBars } from 'react-icons/fa'
const NavBar = () => {
  
  const [isOpen, setIsOpen] = useState(false); 
  
  return (
    <nav>
      <div className="nav-container">
        <span className="nav-logo">MisTec</span>
        <ul className={`nav-links ${isOpen&&'active'}`}>
          <li>Componentes</li>
          <li>Perifericos</li>
          <li>Notebooks</li>
        </ul>

        <div className="nav-btns">
          <button className="navToggle-btn" onClick={()=>setIsOpen(!isOpen)}><FaBars/></button>
          <button className='login-btn'>Login</button>
          <CartWidget/>   
        </div>
       
      </div>
    </nav>
  )
}

export default NavBar
