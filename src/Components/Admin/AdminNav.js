import React from 'react'
import './AdminNav.css'
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
import { BsChatQuote } from "react-icons/bs";
import AdminProject from './AdminProject';

const AdminNav = () => {
    return (
        <>
            <nav className='container adminNav'>
                <ul className='p-0 admin-nav-ul'>
                    <li className='mx-1 my-1'>
                        <button className="btn btn-primary">
                            <AiOutlineFundProjectionScreen />
                        </button>
                    </li>
                    <li className='mx-1 my-1'>
                        <button className="btn btn-primary">
                            <TbCertificate />
                        </button>
                    </li>
                    <li className='mx-1 my-1'>
                        <button className="btn btn-primary">
                            <CgFileDocument />
                        </button>
                    </li>
                    <li className='mx-1 my-1'>
                        <button className="btn btn-primary">
                            <BsChatQuote />
                        </button>
                    </li>
                </ul>
            </nav>
            <AdminProject />
        </>
    )
}

export default AdminNav
