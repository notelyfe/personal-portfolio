import React, { useContext, useEffect, useState } from 'react'
import loadStyle from '../Style/loading.module.css'
import Context from '../../Context/Context'

const Loading = () => {

  const {setLoading} = useContext(Context)
  const [timer, setTimer] = useState(60)
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

      if(timer === 0){
        setLoading(false)
      }

    }, [1000]);

    return () => clearInterval(clearTimer)

  })

  return (
    <div className={loadStyle.loadingWrapper}>
      <div className={loadStyle.backgroundCover}></div>
      <div className={loadStyle.content}>
        <div className={loadStyle.loader}></div>
        <p className={loadStyle.timer}>
          {`Server will start in ${timer} s`}
        </p>
      </div>
    </div>
  )
}

export default Loading
