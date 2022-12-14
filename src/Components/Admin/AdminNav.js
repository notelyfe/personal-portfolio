import React, { useState } from 'react'
import { AiOutlineFundProjectionScreen, AiOutlineLogin } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
import { BsChatQuote } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import ManageData from './ManageData';

const AdminNav = () => {

    const navigate = useNavigate()

    const handelAdminPannel = (e) => {
        setManageDocs(e.target.value);
    }
    const [manageDocs, setManageDocs] = useState('')

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
            {(manageDocs !== '') ? <ManageData manageDocs={manageDocs}/> : ''}
        </>
    )
}

export default AdminNav
