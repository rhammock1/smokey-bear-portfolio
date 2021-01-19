import React from 'react';
import './ContactMe.css';

const ContactMe = function() {

  return (
    <div className ="section-container contactMe">
      <div className='absolute'>
        <h3>Contact Me</h3>
        <div className = "detail-container">
        <form id="form" action="https://formspree.io/f/mdopeerp" method="POST">
          <div className='form-group'>
            <label className = "label" htmlFor="_replyto">Your email: </label>
            <input type="text" id="_replyto" name="_replyto" placeholder="type email here" />
          </div>
          <br />
          <div className='form-group'>
            <label className = "label" htmlFor = "message"> Your message: </label>
            <textarea id = "message" name="message" placeholder="type message here"></textarea>
          </div>
          <button id="submit" 
          type="submit">Send</button>
        </form>
        </div>
      
      <p id="contact">Please do not hesitate to reach out! I am happy to help however I can!</p>
      <div className="list">
        <ol>
            <li className="orderedList"><a rel='noreferrer' href="https://www.linkedin.com/in/robertqhammock/" target="_blank"><img className="icon" alt="LinkedIn Icon" src="https://img.icons8.com/nolan/64/linkedin.png"/></a></li>
            <li className ="orderedList"><a href="https://github.com/rhammock1" rel='noreferrer' target="_blank"><img alt="GitHub Icon" className="icon" src="https://img.icons8.com/nolan/64/github.png"/></a></li>
            <li className ="orderedList"><a href="https://www.instagram.com/robert.hammock1" rel='noreferrer' target="_blank"><img alt="Instagram Icon" className="icon" src="https://img.icons8.com/nolan/64/instagram-new.png"/></a></li>
        </ol>
      </div>
      </div>
    </div>
    )
}

export default ContactMe;