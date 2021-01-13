import React from 'react';
import Project from '../Components/Project/Project';
import Context from '../Context';

class Projects extends React.Component {

  static contextType = Context;
  
  render() {
    const { projects } = this.context;
    const { pathname } = this.props.location || this.props;
    return (
      <div className='section-container'>
        {(pathname === '/')
          ? <h3>Projects</h3>
          : <h2>Projects</h2>
        }
        <div className='container'>        
          {projects.map((project, index) => <Project pathname={pathname} key={index} img={project.img} title={project.title} alt={project.alt} host={project.host} clientRepo={project.clientRepo} serverRepo={project.serverRepo} description={project.description} stack={project.stack} />)}
        </div>
      </div>
      )
  }
}

// Will add support for gitHub API - get projects from there instead
// Make the page more interactive for those visiting

export default Projects;