import React, { useContext } from 'react'
import style from '../Style/home.module.css'
import logo from '../../Assets/logo.png'
import Typewriter from 'typewriter-effect'
import Context from '../../Context/Context'
import Home2 from './Home2'

const Home = () => {

  const { modeStyle } = useContext(Context)

  return (
    <>
      <div className={style.container}>
        <img src={logo} alt="notelyfe logo" className={style.imgLogo} />
        <div className={style.intro}>
          <h1 className={style.heading} style={{ color: `${modeStyle.textColor}` }}>
            Hi There!{" "}
            <span className={style.wave} role="img" aria-labelledby='wave'>
              👋🏻
            </span>
          </h1>

          <h1 className={style.headingName} style={{ color: `${modeStyle.textColor}` }}>
            I'M
            <strong className={style.mainName}> NOTELYFE</strong>
          </h1>
        </div>
        <div className={style.typewriter}>
          <h2 style={{ color: '#05ABC4', fontSize: '30px' }}>
            <Typewriter
              options={{
                strings: [
                  "Deep Learning Engineer",
                  "Full Stack Web Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
              }}
            />
          </h2>
        </div>
      </div>
      <Home2 />
    </>
  )
}

export default Home
