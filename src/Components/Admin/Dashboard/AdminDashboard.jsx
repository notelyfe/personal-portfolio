import React from 'react'
import SideNav from '../Navigation/SideNav'
import style from '../../Style/adminDashboard.module.css'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
    return (
        <div className={style.dashboardWrapper}>
            <SideNav />
            <div className={style.mainWrapper}>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminDashboard
