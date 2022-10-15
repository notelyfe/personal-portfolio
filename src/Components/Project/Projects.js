import React, { useContext } from 'react'
import './Project.css'
import Context from '../context/Context'
import ProjectCards from './ProjectCards';

const Projects = () => {

  const context = useContext(Context)
  const { modeStyle, projects } = context

  return (
    <div className={`row project-container text-${modeStyle.textColor}`}>
      <h1 className='text-center'>MY <span className="velvet"><strong>Projects</strong></span></h1>
      <p className='text-center'>Here are few <span className="velvet">projects</span> I have worked on </p>

      {projects.map((data) => {
        return <ProjectCards key={data._id}
          title={data.title}
          description={data.description}
          image={data.image_link}
          websiteLink={data.website_link}
          projectLink={data.project_link} />
      })}
    </div>
  )
}

export default Projects
