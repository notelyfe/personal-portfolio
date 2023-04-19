import React, { useContext } from 'react'
import style from '../Style/project.module.css'
import Context from '../../Context/Context'
import ProjectCard from './ProjectCard'

const Project = () => {

  const { modeStyle, projects } = useContext(Context)

  const filterProject = projects?.filter((item) => {
    return item.isActive !== false
  })

  return (
    <div className={style.projectContainer} style={{ color: `${modeStyle.textColor}` }}>
      <h1 className={style.projectHeader}>
        MY <span className="velvet"><strong>Projects</strong></span>
      </h1>
      <p>
        Here are few <span className="velvet">projects</span> I have worked on
      </p>

      <div className={style.projectCardContainer}>
        {filterProject.map((data) => {
          return (
            <ProjectCard
              key={data._id}
              title={data.title}
              description={data.description}
              image={data.project_image}
              websiteLink={data.website_link}
              projectLink={data.project_link}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Project
