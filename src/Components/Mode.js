import React from 'react'
import './Mode.css'
import { FiSun } from "react-icons/fi";
import { BsMoonFill } from "react-icons/bs";

const Mode = () => {
  return (
    <div className='mode bg-dark text-light d-flex justify-content-center align-items-center'>
      <BsMoonFill className='toggle-mode'/>
      <FiSun className='toggle-mode'/>
    </div>
  )
}

export default Mode
