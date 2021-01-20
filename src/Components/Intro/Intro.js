import React from 'react';
import { greeting } from '../../helper-functions';
import FishLips from '../App/images/fishLips.PNG';
import './Intro.css';
import Context from '../../Context';

class Intro extends React.Component {

  state = {
    clicked: false,
  }

  static contextType = Context;

  handleClick = () => {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
    // setTimeout(() => {
    //   this.setState({ clicked: false });
    // }, 10000);
  }

  render() {
    const hello = greeting();
    const { temp } = this.context;
    const { clicked } = this.state;
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
                {/* TODO: add on hover event to show popup about how I get the temperature data */}
                {(!clicked) 
                  ? null 
                  : <div className="popup">
                      <p className="popuptext">This data is being gathered by an ESP8266 with a DHT11 temperature sensor. The 8266 is making a POST request with the data to my home server every 10 seconds</p>
                    </div>}
                <p className='temperature'>It is currently <span className='emphasize temp-click' onClick={this.handleClick}>{temp}&#176;F</span> outside my home.</p>
              </div>
          <p className='indent'>As a Developer I am interested in:</p>
          <div className="interest-list">
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
}

export default Intro;