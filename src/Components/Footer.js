import React, { useContext } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
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
  const {modeStyle} = context

  return (
    <footer className={`footer text-center py-1 bg-${modeStyle.bgColor} text-${modeStyle.textColor}  d-flex justify-content-evenly align-items-center`} style={{opacity: '0.9'}}>
      <div className="container author py-2 mx-1">
        <img src={note} alt="note.png" className='developer'/>
      </div>

      <div className="container copyright py-2 mx-1">
        <h5>Copyright&copy; 2022 NL.</h5>
      </div>

      <div className="container container-social-links">
        <ul className='d-flex justify-content-center px-0 my-1 align-items-center footer-item' style={{listStyle:'none'}}>
          <li className=' my-1 py-1 px-2'>
            <Link className={`social-links px-1 text-${modeStyle.textColor}`} to=""><AiOutlineGithub /></Link>
          </li>
          <li className=' my-1 py-1 px-2'>
            <Link className={`social-links px-1 text-${modeStyle.textColor}`} to=""><AiOutlineInstagram /></Link>
          </li>
          <li className=' my-1 py-1 px-2'>
            <Link className={`social-links px-1 text-${modeStyle.textColor}`} to=""><AiOutlineTwitter /></Link>
          </li>
          <li className=' my-1 py-1 px-2'>
            <Link className={`social-links px-1 text-${modeStyle.textColor}`} to=""><AiOutlineLinkedin /></Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
