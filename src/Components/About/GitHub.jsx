import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import style from '../Style/about.module.css'

const GitHub = () => {
  return (
    <div className={style.gitHubContainer}>
      <h1 className="text-center mt-3 " >
        Days I <strong className="velvet">Code</strong>
      </h1>
      <GitHubCalendar
        username="notelyfe"
        blockSize={15}
        blockMargin={5}
        color="#2C7090"
        fontSize={16}
        showWeekdayLabels={true}
      />
    </div>
  )
}

export default GitHub
