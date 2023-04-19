import React from 'react'
import style from '../../Style/sideNav.module.css'
import logo from '../../../Assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen
} from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
import { BsChatQuote, BsActivity, BsBrush } from "react-icons/bs";
import { MdNotificationsNone, MdOutlineLogout } from "react-icons/md";

const SideNav = () => {

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('access_token')
    navigate('/')
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
        >
          <MdNotificationsNone />
          Notification
        </Link>
        <Link
          to="activity"
          className={style.sideNavItem}
        >
          <BsActivity />
          Activity
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
