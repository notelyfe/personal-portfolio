import React, { useContext, useEffect } from 'react'
import logo from './Assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineFundProjectionScreen
} from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import Context from './context/Context';

const Navbar = () => {

    let location = useLocation();
    useEffect(() => {
        
    }, [location]);

    var path = location.pathname;
    path = path.slice(1,path.length)
    path = path.charAt(0).toUpperCase() + path.slice(1);

    if(path === ''){
        document.title = "NOTELYFE | Portfolio"
    }else{
        document.title = `${path} | Portfolio`
    }

    const context = useContext(Context)
    const { modeStyle } = context

    const toggleActive = () => {
        const hamburger = document.querySelector(".ham");
        const navMenu = document.querySelector(".nav-ul");

        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    const toggleRemove = () => {
        const hamburger = document.querySelector(".ham");
        const navMenu = document.querySelector(".nav-ul");

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    return (
        <div className={`bg-${modeStyle.bgColor} text-${modeStyle.textColor} nav-container fixed-top`}>
            <Link to="/">
                <img src={logo} className="logo" alt='logo.png' />
            </Link>
            <nav className="nav-items">
                <ul className={`navbar-nav bg-${modeStyle.bgColor} text-${modeStyle.textColor} my-2 my-lg-0 nav-ul py-1`}>
                    <li className='nav-item' onClick={toggleRemove}>
                        <AiOutlineHome className='icons mx-1' />
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li className='nav-item' onClick={toggleRemove}>
                        <AiOutlineUser className='icons mx-1' />
                        <Link className='nav-link' to="/about">About</Link>
                    </li>
                    <li className='nav-item' onClick={toggleRemove}>
                        <AiOutlineFundProjectionScreen className='icons mx-1' />
                        <Link className='nav-link' to="/projects">Projects</Link>
                    </li>
                    <li className='nav-item' onClick={toggleRemove}>
                        <TbCertificate className='icons mx-1' />
                        <Link className='nav-link' to="/certificates">Certificates</Link>
                    </li>
                    <li className='nav-item' onClick={toggleRemove}>
                        <CgFileDocument className='icons mx-1' />
                        <Link className='nav-link' to="/resume">Resume</Link>
                    </li>
                    <li className='nav-item' onClick={toggleRemove}>
                        <RiAdminLine className='icons mx-1' />
                        <Link className={`nav-link ${(location.pathname === '/user') ? 'disabled' : ''}`} to="/admin">Admin</Link>
                    </li>
                </ul>
            </nav>
            <div className="ham py-1 px-2 rounded" onClick={toggleActive}>
                <span className='bar rounded'></span>
                <span className='bar rounded'></span>
                <span className='bar rounded'></span>
            </div>
        </div>
    )
}

export default Navbar