import React, { useContext } from 'react'
import { ImPointRight } from "react-icons/im";
import './About.css'
import Context from '../context/Context'
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import GitHub from './GitHub';

const About = () => {

  const context = useContext(Context)
  const { modeStyle } = context

  return (
    <div className={`container text-${modeStyle.textColor} about fs-4`}>
      <div className='about-card'>
        <h1 className='text-center'>Know Who <span className="velvet">I'M</span> </h1>
        <p style={{ marginTop: '20px' }}>
          Hi Everyone, I am <span className="velvet">NOTELYFE  </span>
          from <span className="velvet"> DELHI, India.</span>
          <br />FrontEnd Web Developer
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul >
          <li className="about-activity">
            <ImPointRight /> Playing Games
          </li>
          <li className="about-activity">
            <ImPointRight /> Web/App Testing
          </li>
          <li className="about-activity">
            <ImPointRight /> Tweeting my thoughts
          </li>
        </ul>
        <blockquote className="velvet text-center">NOTELYFE</blockquote>
      </div>
      
      <Techstack />
      <Toolstack />
      <GitHub />
    </div>
  )
}

export default About
