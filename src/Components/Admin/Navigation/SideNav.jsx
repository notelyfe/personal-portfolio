import React, { useContext } from 'react'
import style from '../../Style/sideNav.module.css'
import logo from '../../../Assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen
} from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
import { BsChatQuote, BsBrush } from "react-icons/bs";
import { MdNotificationsNone, MdOutlineLogout } from "react-icons/md";
import Context from '../../../Context/Context'
import api, { getAccessToken } from '../../../Services/api'

const SideNav = () => {

  const navigate = useNavigate()
  const { setUserData, notifications } = useContext(Context)

  const logout = () => {
    localStorage.removeItem('access_token')
    navigate('/')
    setUserData(null)
  }

  const notify = notifications.filter((item) => {
    return item.isReaded === false
  })

  const checkReadStatus = async () => {

    let ids = []
    notify.map((item) => {
      ids.push(item._id)
    })

    if (notify.length > 0) {
      const res = await api.patch('/api/notifications/status', { ids }, {
        headers: {
          "access_token": getAccessToken()
        }
      })
    }
  }

  return (
    <div className={style.sideNavContainer}>
      <div className={style.adminContainer}>
        <img src={logo} className={style.logo} alt="logo" />
        <h5>Ankesh Kumar</h5>
      </div>
      <div className={style.sideNavItemContainer}>
        <Link
          to="/Admin"
          className={style.sideNavItem}
        >
          <AiOutlineHome />
          Dashboard
        </Link>
        <Link
          to="project"
          className={style.sideNavItem}
        >
          <AiOutlineFundProjectionScreen />
          Projects
        </Link>
        <Link
          to="certificate"
          className={style.sideNavItem}
        >
          <TbCertificate />
          Certificate
        </Link>
        <Link
          to="resume"
          className={style.sideNavItem}
        >
          <CgFileDocument />
          Resume
        </Link>
        <Link
          to="quote"
          className={style.sideNavItem}
        >
          <BsChatQuote />
          Quotes
        </Link>
        <Link
          to="notification"
          className={style.sideNavItem}
          onClick={checkReadStatus}
        >
          <MdNotificationsNone />
          Notification
          {notify?.length > 0 && (
            <p style={{ margin: '0 20px', padding: '2px 7px', background: 'red', color: "white", borderRadius: '5px' }}>{notify.length}</p>
          )}
        </Link>
        <Link
          to="manage-theme"
          className={style.sideNavItem}
        >
          <BsBrush />
          Theme
        </Link>
      </div>
      <div className={style.logoutContainer}>
        <button
          className={style.logoutBtn}
          onClick={logout}
        >
          <MdOutlineLogout />
          Logout
        </button>
      </div>
    </div>
  )
}

export default SideNav
