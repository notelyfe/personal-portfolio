import React, { useContext } from 'react'
import style from '../Style/resume.module.css'
import Context from '../../Context/Context'
import ResumeData from './ResumeData'

const Resume = () => {

  const { modeStyle, resume } = useContext(Context)

  return (
    <div className={style.resumeContainer}>
      {resume.map((item) => {
        return (
          <ResumeData
            key={item._id}
            resumeLink={item.resume_file}
            modeStyle={modeStyle}
          />
        )
      })}
    </div>
  )
}

export default Resume
