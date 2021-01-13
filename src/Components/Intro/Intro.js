import React from 'react';
import { greeting } from '../../helper-functions';
import FishLips from '../App/images/fishLips.PNG';
import './Intro.css';

const Intro = function() {
  const hello = greeting();
  return (
    <div className="section-container">
      <div className='img'>
        <img src={FishLips} alt="Me making kissy face at a fish" id="fishLips" />
      </div>
      <h2>{hello}</h2>
      <div className="detail-container">
        <p className='indent'>I am a Full Stack Developer, currently working for a small local food hub, called Freshlist. I have a background in Restaurants and Food Service.
        I live in Charlotte, North Carolina.</p>

        <p className='indent'>As a Developer I am interested in:</p>
        <div className="list">
          <ul>
            <li>Microcontrollers and IoT</li>
            <li>Making things work</li>
            <li>Learning everything I can</li>
          </ul>
        </div> 
          <p className='indent'>My goal is to use software engineering to progress my career and create better opportunities for my future.</p>
      </div>  
    </div>
    )
}

export default Intro;