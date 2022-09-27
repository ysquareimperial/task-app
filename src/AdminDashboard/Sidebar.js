import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import '../Sidebar.css'
export default function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()
    // const results = { fullname: '', accessTo: 'Dashboard, All Users,All Projects' }

    // const getAccess = (user, value) => {
    //     return user.accessTo.includes(value) ? true : false
    // }
    const handleLogout = () => {
        localStorage.removeItem('taskify')
        window.location = '/'
    }
    const user = useSelector(state => state.auth.user)


    return (
        <div className='mt-5 whole-side' style={{ postition: 'fixed' }}>
            <div>

                <p className={`sidebar-i ${location.pathname === "/pending-tasks" && "active_sidebar"
                    }`} onClick={() => navigate('/pending-tasks')}><i class="fa-solid fa-list-check"></i>{' '}My Tasks</p>
                <p className={`sidebar-i ${location.pathname === "/admin" && "active_sidebar"
                    }`} onClick={() => navigate('/admin')}><i class="fa-solid fa-gauge"></i>{' '}Dashboard</p>
                <p className={`sidebar-i ${location.pathname === "/admin/all-projects" && "active_sidebar"
                    }`} onClick={() => navigate('/admin/all-projects')}><i class="fa-solid fa-folder"></i>{' '}All Projects</p>
                <p className={`sidebar-i ${location.pathname === "/admin/create-task" && "active_sidebar"
                    }`} onClick={() => navigate('/admin/create-task')}><i class="fa-solid fa-circle-plus"></i>{' '}Create Task</p>
                <p className={`sidebar-i ${location.pathname === "/admin/pending-tasks" && "active_sidebar"
                    }`} onClick={() => navigate('/admin/pending-tasks')}><i class="fa-solid fa-circle-exclamation"></i>{' '}Pending Tasks</p>
                <p className={`sidebar-i ${location.pathname === "/admin/inprogress-tasks" && "active_sidebar"
                    }`} onClick={() => navigate('/admin/inprogress-tasks')}><i class="fa-solid fa-spinner"></i>{' '}In Progress Tasks</p>
                <p className={`sidebar-i ${location.pathname === "/admin/done-tasks" && "active_sidebar"
                    }`} onClick={() => navigate('/admin/done-tasks')}><i class="fa-solid fa-circle-check"></i>{' '}Done Tasks</p>
                <div className='logout-div' style={{ position: 'fixed', bottom: 0 }}>
                    <p className='user_email' onClick={()=>navigate('/admin/profile')} style={{cursor:'pointer'}}><i class="fa-solid fa-user"></i>{' '}{user.email}</p>
                    <p className='log' onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i>{' '}Log out</p>
                </div>
            </div>
        </div>
    )
}
