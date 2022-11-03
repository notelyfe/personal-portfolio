import React, { useContext } from 'react'
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import Context from './context/Context'

const Mode = () => {

  const context = useContext(Context);
  const { handelDarkMode, mode, modeStyle } = context

  return (
    <div className={`mode bg-${modeStyle.textColor} text-${modeStyle.bgColor} d-flex justify-content-center align-items-center`} 
    style={{boxShadow :`${modeStyle.boxshadow}`}}>
      {(mode === true) ?
        <BsMoonFill onClick={handelDarkMode} className='toggle-mode' /> :
        <BsSunFill onClick={handelDarkMode} className='toggle-mode' />
      }
    </div>
  )
}

export default Mode
