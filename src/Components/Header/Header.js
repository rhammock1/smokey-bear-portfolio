import React from 'react';
import { Link } from 'react-router-dom';
import { AnimateOnChange } from 'react-animation';
import './Header.css';

const Header = function() {

    return (
      <header id="home">
        <div className = "opening">
            <h1>Robert Hammock</h1>
            <span className='span-p' ><AnimateOnChange><p>Full Stack Developer</p></AnimateOnChange></span>
        </div>
        <nav>
            <ul id = "nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
      </header>
  )
}

export default Header;