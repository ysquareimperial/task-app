import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../Sidebar.css'
export default function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className='mt-4'>
            {/* <ul style={{ marginLeft: 0 }}> */}
            <p className={`sidebar-i ${location.pathname === "/admin" && "active_sidebar"
                }`} onClick={() => navigate('/admin')}><i class="fa-solid fa-gauge"></i>{' '}Dashboard</p>
            <p className={`sidebar-i ${location.pathname === "/admin/all-users" && "active_sidebar"
                }`} onClick={() => navigate('/admin/all-users')}><i class="fa-solid fa-user-group"></i>{' '}All Users</p>
            <p className={`sidebar-i ${location.pathname === "/admin/create-task" && "active_sidebar"
                }`} onClick={() => navigate('/admin/create-task')}><i class="fa-solid fa-circle-plus"></i>{' '}Create Task</p>
            <p className={`sidebar-i ${location.pathname === "/admin/pending-tasks" && "active_sidebar"
                }`} onClick={() => navigate('/admin/pending-tasks')}><i class="fa-solid fa-circle-exclamation"></i>{' '}Pending Tasks</p>
            <p className={`sidebar-i ${location.pathname === "/admin/inprogress-tasks" && "active_sidebar"
                }`} onClick={() => navigate('/admin/inprogress-tasks')}><i class="fa-solid fa-spinner"></i>{' '}In Progress Tasks</p>
            <p className={`sidebar-i ${location.pathname === "/admin/done-tasks" && "active_sidebar"
                }`} onClick={() => navigate('/admin/done-tasks')}><i class="fa-solid fa-circle-check"></i>{' '}Done Tasks</p>
            {/* </ul> */}
        </div>
    )
}
