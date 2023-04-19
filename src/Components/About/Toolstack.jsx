import React from 'react'
import {
  SiLinux,
  SiVisualstudiocode,
  SiHeroku,
  SiCloudflare,
} from "react-icons/si";
import style from '../Style/about.module.css'

const Toolstack = () => {
  return (
    <div className={style.toolsContainer}>
      <h1 className={style.toolsHeader}>
        <strong className="velvet">Tools</strong> I use
      </h1>
      <div className={style.stackContainer}>
        <div className={style.techIcons}>
          <SiLinux />
        </div>
        <div className={style.techIcons}>
          <SiVisualstudiocode />
        </div>
        <div className={style.techIcons}>
          <SiCloudflare />
        </div>
        <div className={style.techIcons}>
          <SiHeroku />
        </div>
      </div>
    </div>
  )
}

export default Toolstack
