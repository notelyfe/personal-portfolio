import React, { useContext } from 'react'
import { TbExternalLink } from "react-icons/tb";
import Context from '../context/Context'

const ProjectCards = ({ title, description, image, websiteLink, projectLink }) => {

  const context = useContext(Context)
  const { modeStyle } = context

  image = btoa(
  String.fromCharCode(...new Uint8Array(image.data.data))
  );

  return (
    <div className={`card my-4 mx-2 bg-${modeStyle.bgColor}`} style={{ width: '25rem', height: '32rem' }}>
      <img src={`data:image/png;base64,${image}`} className="card-img-top rounded my-2 " alt="Project Image" style={{ height: "185px"}}/>
      <div className="card-body">
        <div className="content my-1">
          <h5 className="card-title text-center velvet text-capitalize">{title}</h5>
          <p className="card-text px-1">{description}</p>
        </div>
        <div className="link">
          <a href={projectLink} target='_blank' className="btn btn-primary project-link my-1"><TbExternalLink className='mx-1' />View Project</a>
          <a href={websiteLink} target='_blank' className="btn btn-primary project-link my-1"><TbExternalLink className='mx-1' />View WebSite</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards
