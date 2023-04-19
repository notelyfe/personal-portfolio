import React, { useContext, useState } from 'react'
import style from '../Style/nav.module.css'
import Logo from '../../Assets/logo.png'
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFundProjectionScreen
} from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
import { Link, useLocation } from 'react-router-dom'
import Context from '../../Context/Context'

const Nav = () => {

    let location = useLocation();

    var path = location.pathname;
    path = path.slice(1, path.length)
    path = path.charAt(0).toUpperCase() + path.slice(1);

    if (path === '') {
        document.title = "NOTELYFE | Portfolio"
    } else {
        document.title = `${path} | Portfolio`
    }

    const { modeStyle } = useContext(Context)

    const [toggleHam, setToggleHam] = useState(false)

    const toggleActive = () => {
        setToggleHam(!toggleHam)
    }

    const toggleRemove = () => {
        setToggleHam(false)
    }

    return (
        <div className={style.navContainer}
            style={{
                background: `${modeStyle.bgColor}`,
                color: `${modeStyle.textColor}`,
                boxShadow: `${modeStyle.boxShadow}`
            }}
        >
            <Link to="/">
                <img src={Logo} className={style.logo} alt="logo" />
            </Link>
            <nav className={style.navItems}>
                <ul className={`${style.navUl} ${toggleHam && style.active}`}
                    style={{
                        background: `${modeStyle.bgColor}`,
                        color: `${modeStyle.textColor}`,
                    }}
                >
                    <li className={style.listItems} onClick={toggleRemove} >
                        <AiOutlineHome className={style.icons} />
                        <Link className={style.navLink} to="/" style={{ color: `${modeStyle.textColor}` }}>Home</Link>
                    </li>
                    <li className={style.listItems} onClick={toggleRemove}>
                        <AiOutlineUser className={style.icons} />
                        <Link className={style.navLink} to="/about" style={{ color: `${modeStyle.textColor}` }}>About</Link>
                    </li>
                    <li className={style.listItems} onClick={toggleRemove}>
                        <AiOutlineFundProjectionScreen className={style.icons} />
                        <Link className={style.navLink} to="/projects" style={{ color: `${modeStyle.textColor}` }}>Projects</Link>
                    </li>
                    <li className={style.listItems} onClick={toggleRemove}>
                        <TbCertificate className={style.icons} />
                        <Link className={style.navLink} to="/certificates" style={{ color: `${modeStyle.textColor}` }}>Certificates</Link>
                    </li>
                    <li className={style.listItems} onClick={toggleRemove}>
                        <CgFileDocument className={style.icons} />
                        <Link className={style.navLink} to="/resume" style={{ color: `${modeStyle.textColor}` }}>Resume</Link>
                    </li>
                </ul>
            </nav>
            <div className={`${style.ham} ${toggleHam && style.active}`} onClick={toggleActive}>
                <span className={style.bar}></span>
                <span className={style.bar}></span>
                <span className={style.bar}></span>
            </div>
        </div>
    )
}

export default Nav
