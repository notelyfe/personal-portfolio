import React, { useContext } from 'react'
import logo from '../Assets/logo.png'
import './Home.css'
import Typewriter from 'typewriter-effect'
import Context from '../context/Context'
import Home2 from './Home2'
import Spotify from './Spotify'

const Home = () => {

  const context = useContext(Context)
  const { modeStyle } = context

  return (
    <>
      <div className='container home' >
        <img src={logo} alt="logo.png" className='img-logo my-1' />
        <div className="intro text-center my-1">
          <h1 style={{ paddingBottom: 15 }} className={`heading text-${modeStyle.textColor}`}>
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className={`heading-name text-${modeStyle.textColor}`}>
            I'M
            <strong className="main-name" style={{ color: '#2C7090' }}> NOTELYFE</strong>
          </h1>
        </div>
        <div className='mt-4'>
          <h2 style={{ color: '#05ABC4' }}>
            <Typewriter
              options={{
                strings: [
                  "Deep Learning Engineer",
                  "FrontEnd Web Developer",
                  "Open Source Contributor",
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
      <Spotify />
    </>
  )
}

export default Home
