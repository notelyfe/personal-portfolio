import React, { useEffect, useState } from 'react'
import loadStyle from '../Style/loading.module.css'

const Loading = () => {

  const [timer, setTimer] = useState(32)
  var clearTimer

  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  })

  useEffect(() => {

    clearTimer = setInterval(() => {

      setTimer(timer - 1)

    }, [1000]);

    return () => clearInterval(clearTimer)

  })

  return (
    <div className={loadStyle.loadingWrapper}>
      <div className={loadStyle.backgroundCover}></div>
      <div className={loadStyle.content}>
        <div className={loadStyle.loader}></div>
        <p className={loadStyle.timer}>
          {`Server will start in ${timer}s`}
        </p>
      </div>
    </div>
  )
}

export default Loading
