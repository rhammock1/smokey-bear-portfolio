import React from 'react';
import AboutMe from '../Components/AboutMe/AboutMe';
import ContactMe from '../Components/ContactMe/ContactMe';
import Intro from '../Components/Intro/Intro';
import Projects from './Projects';

const Home = function(props) {
  const { path } = props.match;
  return (
    <>
      <div className='container'><Intro /></div>
      <div className='container'><AboutMe /></div>
      <div className='container'><Projects pathname={path} /></div>
      <div className='container'><ContactMe /></div>
    </>
  )
}

export default Home;