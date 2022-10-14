import React, { useState } from 'react'
import './AdminNav.css'
import { AiOutlineFundProjectionScreen, AiOutlineLogin } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
import { BsChatQuote } from "react-icons/bs";
import AdminProject from './AdminProject';
import AdminCertificate from './AdminCertificate';
import AdminResume from './AdminResume';
import AdminQuotes from './AdminQuotes';
import { useNavigate } from 'react-router-dom';

const AdminNav = () => {

    const navigate = useNavigate()

    const handelAdminPannel = (e) => {
        setComp(e.target.value);
    }
    const [comp, setComp] = useState('project')

    const logout = () => {
        localStorage.removeItem('myToken')
        navigate('/')
    }

    return (
        <>
            <nav className='container adminNav'>
                <ul className='p-0 admin-nav-ul'>
                    <li className='mx-1 my-1'>
                        <button
                            className="btn btn-primary"
                            value="project"
                            onClick={handelAdminPannel}>
                            <AiOutlineFundProjectionScreen />
                            Project
                        </button>
                    </li>
                    <li className='mx-1 my-1'>
                        <button
                            className="btn btn-primary"
                            value="certificate"
                            onClick={handelAdminPannel}>
                            <TbCertificate />
                            Certificate
                        </button>
                    </li>
                    <li className='mx-1 my-1'>
                        <button
                            className="btn btn-primary"
                            value="resume"
                            onClick={handelAdminPannel}>
                            <CgFileDocument />
                            Resume
                        </button>
                    </li>
                    <li className='mx-1 my-1'>
                        <button
                            className="btn btn-primary"
                            value="quotes"
                            onClick={handelAdminPannel}>
                            <BsChatQuote />
                            Quotes
                        </button>
                    </li>
                    <li className='mx-1 my-1'>
                        <button
                            className="btn btn-primary"
                            onClick={logout}>
                            <AiOutlineLogin />
                            LogOut
                        </button>
                    </li>
                </ul>

            </nav>
            {(comp === 'project') ? <AdminProject /> : ''}
            {(comp === 'certificate') ? <AdminCertificate /> : ''}
            {(comp === 'resume') ? <AdminResume /> : ''}
            {(comp === 'quotes') ? <AdminQuotes /> : ''}
        </>
    )
}

export default AdminNav
