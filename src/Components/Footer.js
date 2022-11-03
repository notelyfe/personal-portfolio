import React, { useContext } from 'react'
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin
} from "react-icons/ai";
import Context from './context/Context'
import note from '../Components/Assets/note.png'

const Footer = () => {

  const context = useContext(Context)
  const { modeStyle } = context

  return (
    <footer className={`footer text-center py-1 bg-${modeStyle.bgColor} text-${modeStyle.textColor}  d-flex justify-content-evenly align-items-center`} style={{ opacity: '0.9' }}>
      <div className="container author py-2 mx-1">
        <img src={note} alt="note.png" className='developer' />
      </div>

      <div className="container copyright py-2 mx-1">
        <h5>Copyright&copy; 2022 NL.</h5>
      </div>

      <div className="container container-social-links">
        <ul className='d-flex justify-content-center px-0 my-1 align-items-center footer-item' style={{ listStyle: 'none' }}>
          <li className=' my-1 py-1 px-2'>
            <a
              className={`social-links px-1 text-${modeStyle.textColor}`}
              href="https://github.com/notelyfe"
              target="_blank">
              <AiOutlineGithub />
            </a>
          </li>
          <li className=' my-1 py-1 px-2'>
            <a
              className={`social-links px-1 text-${modeStyle.textColor}`}
              href="https://www.instagram.com/notelyfe/"
              target="_blank">
              <AiOutlineInstagram />
            </a>
          </li>
          <li className=' my-1 py-1 px-2'>
            <a
              className={`social-links px-1 text-${modeStyle.textColor}`}
              href="https://twitter.com/note_lyfe"
              target="_blank">
              <AiOutlineTwitter />
            </a>
          </li>
          <li className=' my-1 py-1 px-2'>
            <a
              className={`social-links px-1 text-${modeStyle.textColor}`}
              href="https://www.linkedin.com/in/notelyfe/"
              target="_blank">
              <AiOutlineLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
