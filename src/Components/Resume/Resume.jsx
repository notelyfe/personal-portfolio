import React, { useContext } from 'react'
import style from '../Style/resume.module.css'
import Context from '../../Context/Context'
import ResumeData from './ResumeData'

const Resume = () => {

  const { modeStyle } = useContext(Context)

  return (
    <div className={style.resumeContainer}>
      <ResumeData modeStyle={modeStyle} />
    </div>
  )
}

export default Resume
