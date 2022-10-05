import React, { useContext } from 'react'
import './Project.css'
import pro from './Assets/hotelBooking.png'
import Context from './context/Context'
import { Link } from 'react-router-dom'

const Projects = () => {

  const context = useContext(Context)
  const { modeStyle } = context

  return (
    <div className={`row project-container text-${modeStyle.textColor}`}>
      <h1 className='text-center'>MY <span className="velvet"><strong>Projects</strong></span></h1>
      <p className='text-center'>Here are few <span className="velvet">projects</span> I have worked on </p>
      <div className={`card my-4 mx-2 bg-${modeStyle.bgColor}`} style={{ width: '25rem', height: '32rem' }}>
        <img src={pro} className="card-img-top rounded my-2 " alt="pro.png" />
        <div className="card-body">
          <div className="content my-1">
            <h5 className="card-title text-center velvet">Card title</h5>
            <p className="card-text px-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="link">
            <Link to="#" className="btn btn-primary project-link my-1">View Project</Link>
            <Link to="#" className="btn btn-primary project-link my-1">View WebSite</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
