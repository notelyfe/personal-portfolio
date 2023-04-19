import React, { useContext, useState } from 'react'
import Context from '../../Context/Context'
import style from '../Style/about.module.css'
import { ImPointRight } from "react-icons/im";
import Quotes from './Quotes'
import Techstack from './Techstack';
import Toolstack from './Toolstack';
import GitHub from './GitHub';

const About = () => {

  const { modeStyle } = useContext(Context)

  return (
    <>
      <div className={style.aboutContainer} style={{ color: `${modeStyle.textColor}` }}>
        <div className={style.aboutCard}>
          <h1 className={style.aboutHeader}>
            Know Who <span className="velvet">I'M</span>
          </h1>
          <p className={style.para}>
            Hi Everyone, I am <span className="velvet">NOTELYFE  </span>
            from <span className="velvet"> DELHI, India.</span>
            <br />FrontEnd Web Developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <br />
          <br />
          <ul >
            <li className={style.aboutActivity}>
              <ImPointRight /> Playing Games
            </li>
            <li className={style.aboutActivity}>
              <ImPointRight /> Web/App Testing
            </li>
            <li className={style.aboutActivity}>
              <ImPointRight /> Tweeting my thoughts
            </li>
          </ul>
          <Quotes quote="WHEN EVERY THING GOES WRONG, START FROM ZERO." />
          <blockquote className="velvet" style={{ textAlign: 'center', marginTop: '10px' }}>&#8212; NOTELYFE</blockquote>
        </div>

        <Techstack />
        <Toolstack />
        <GitHub />
      </div>
    </>
  )
}

export default About
