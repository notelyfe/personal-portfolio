import React from 'react'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import style from '../Style/about.module.css'

const Techstack = () => {
  return (
    <div className={style.techStackContainer}>
      <h1 className={style.stackHeader}>
        Professional <strong className="velvet">Skillset </strong>
      </h1>
      <div className={style.stackContainer}>
        <div className={style.techIcons}>
          <DiJavascript1 />
        </div>
        <div className={style.techIcons}>
          <DiReact />
        </div>
        <div className={style.techIcons}>
          <DiNodejs />
        </div>
        <div className={style.techIcons}>
          <DiMongodb />
        </div>
        <div className={style.techIcons}>
          <DiPython />
        </div>
        <div className={style.techIcons}>
          <DiGit />
        </div>
        <div className={style.techIcons}>
          <DiGithubBadge />
        </div>
        <div className={style.techIcons}>
          <FaBootstrap />
        </div>
      </div>
    </div>
  )
}

export default Techstack
