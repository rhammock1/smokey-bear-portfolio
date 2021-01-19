import React from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context';
import './Header.css';

class Header extends React.Component {
  
  static contextType = Context;

  render() {
    const { temp } = this.context;

    return (
      <header id="home">
        <div className = "opening">
            <h1>Robert Hammock</h1>
            <span className='span-p'><p>Full Stack Developer</p></span>
            <div className='temp'>
              {/* TODO: add on hover event to show popup about how I get the temperature data */}
              <p className='temperature'>Currently: {temp}&#176;F</p>
            </div>
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
}

export default Header;