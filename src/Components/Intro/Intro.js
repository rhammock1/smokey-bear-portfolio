import React from 'react';
import { greeting } from '../../helper-functions';
import FishLips from '../App/images/fishLips.PNG';
import './Intro.css';
import Context from '../../Context';

class Intro extends React.Component {

  static contextType = Context;

  render() {
    const hello = greeting();
    const { temp } = this.context;
    return (
      <div className="section-container">
        <div className='img'>
          <img src={FishLips} alt="Me making kissy face at a fish" id="fishLips" />
        </div>
        <h2>{hello}</h2>
        <div className="detail-container">
          <p className='indent'>I am a Full Stack Developer, currently working for a small local food hub, called Freshlist. I have a background in Restaurants and Food Service.
          I live in Charlotte, North Carolina.</p>
          <div className='temp'>
                <p className='temperature'>It is currently <span className='emphasize temp-click' onClick={this.handleClick}>{temp}&#176;F</span> outside my home.</p>
                <div className="popup">
                  {/* TODO 
                  begin recording data 
                  add graph data in with D3 
                  compare one day to the next */}
                  <p className="temperature">This data is being gathered by an ESP8266 with a DHT11 temperature sensor. The 8266 is making a POST request with the data to my home server every 10 seconds</p>
                </div>
              </div>
          
          <div className="interest-list">
            <p className='indent'>As a developer I am interested in:</p>
            <ul>
              <li>Microcontrollers and IoT</li>
              <li>Making things work</li>
              <li>Learning everything I can</li>
            </ul>
          </div> 
            <p className='indent'>My goals are to use software to create positive change in my community, to never stop learning, and to always keep building</p>
        </div>  
      </div>
      )
  }
}

export default Intro;