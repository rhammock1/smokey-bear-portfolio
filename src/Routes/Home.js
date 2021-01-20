import React from 'react';
import AboutMe from '../Components/AboutMe/AboutMe';
import ContactMe from '../Components/ContactMe/ContactMe';
import Intro from '../Components/Intro/Intro';
import Projects from './Projects';

const Home = function(props) {
  const { path } = props.match;
  return (
    <>      
      <Intro />
      <AboutMe />
      <Projects pathname={path} />
      <ContactMe />
    </>
  )
}

export default Home;