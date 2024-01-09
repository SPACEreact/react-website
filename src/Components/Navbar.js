import React from 'react'
import '../App.css'
import tesla from '../Assets/tesla.png'
import {Link} from "react-router-dom";
import '../Styles/Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar-container'>
    

    

    <div className="leftside">
        <img src={tesla} alt='Tesla'/>
    </div>

    <div className="nav-links">
    <Link to="/" className='nav-link'>Landing</Link>
    <Link to="/Menu" className='nav-link' >Buy</Link>
    <Link to="/Contact" className='nav-link' >Contact</Link>
    <Link to="/About" className='nav-link' >About</Link>
    </div>
    <div className="rightside"></div>

    
   
    </div>
  )
}

export default Navbar