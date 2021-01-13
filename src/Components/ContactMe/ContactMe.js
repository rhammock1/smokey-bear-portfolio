import React from 'react';
import './ContactMe.css';

const ContactMe = function() {

  return (
    <div className ="section-container">
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
            <li className="orderedList"><a rel='noreferrer' href="https://www.linkedin.com/in/robertqhammock/" target="_blank">LinkedIn</a></li>
            <li className ="orderedList"><a href="https://github.com/rhammock1" rel='noreferrer' target="_blank">GitHub</a></li>
            <li className ="orderedList"><a href="https://www.instagram.com/robert.hammock1" rel='noreferrer' target="_blank">Instagram</a></li>
        </ol>
      </div>
    </div>
    )
}

export default ContactMe;