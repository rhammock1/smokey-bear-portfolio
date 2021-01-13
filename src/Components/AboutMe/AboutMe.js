import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

const AboutMe = function(props) {
  const { pathname } = props || {};
  return (
    <div className='section-container'>
      {(pathname === '/about')
        ? <h2>About Me</h2>
        : <h3>About Me</h3>
      }
      <div id="about" className ="detail-container">

        <p className='indent'>I am from Jacksonville, Florida originally. I was a Boy Scout growing up, and I earned the rank of Eagle Scout. 
        I graduated college from Johnson & Wales University in 2019. I completed associates degrees in Culinary Arts
        and Baking and Pastry. I also received a bachelor's in Entrepreneurship. This has led me to work with
        several restaurants in the Charlotte area and introduced me to Freshlist. I began to teach myself coding 
        a few months ago. I made a lot of use of freeCodeCamp and LinkedIn Learn videos. Aside from coding I enjoy,
        cooking and baking, watching Netflix documentaries and anime, playing video games, and spending time with my family.  
        </p>
        <p className='indent'>Working with Freshlist, I was able to use HTML and CSS to edit our order slips. We were able to prototype an Instagram follower counter. 
          We had to code an HTML scrape with Python to pull the data we needed and then wire the display to a Raspberry Pi to show the data. 
          We have also recently started working on a type of blockchain program to track whole animals as they go from the rancher to a processor, to us.
        </p>
        <p className='indent'>I am proficient in Node.js, React, Express, and PostrgreSQL. I can offer smart solutions to any problem.</p>
      </div>
      {(pathname === '/about')
        ? <button className="back" type="button"><Link to='/'>Back</Link></button>
        : null }
    </div>
    
    )
}

export default AboutMe;