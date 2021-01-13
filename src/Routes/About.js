import React from 'react';
import AboutMe from '../Components/AboutMe/AboutMe';

class About extends React.Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <AboutMe pathname={pathname} />
      )
  }
}

// Will add support for gitHub API
// Make the page more interactive for those visiting

export default About;