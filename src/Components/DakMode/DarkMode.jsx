import React, { useContext, useState } from 'react'
import style from '../Style/darkmode.module.css'
import Context from '../../Context/Context'

const DarkMode = () => {

  const { handelDarkMode } = useContext(Context)
  const [checked, setChecked] = useState(false)

  const handelModeChange = (e) => {
    setChecked(e.currentTarget.checked)
    handelDarkMode(e.currentTarget.checked)
  }

  return (
    <div>
      <input
        type="checkbox"
        id="toggle-btn-1"
        onChange={handelModeChange}
        checked={checked}
        className={style.toggleBtn}
      />
      <label htmlFor="toggle-btn-1" className={style.label}></label>
    </div>
  )
}

export default DarkMode
