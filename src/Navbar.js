import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
import { FaBell } from 'react-icons/fa'
import userr from './images/profile.jpg'
import { Settings } from 'react-feather'
import { _get } from './helpers/api'
// import { _get } from './helpers/api'
export default function Navbar() {
  const user = useSelector(state => state.auth.user)

  const navigate = useNavigate()
  const location = useLocation()


  const inprogressTasks = useSelector(state => state.tasks.inprogressTasks)
  const pendingTasks = useSelector(state => state.tasks.pendingTasks)
  const doneTasks = useSelector(state => state.tasks.doneTasks)

  const [notifications, setNotifications] = useState([])
  useEffect(() => {

    _get(`notifications/${user.id}`, resp => {
      console.log(resp)
      if (resp && resp.length) {
        setNotifications(resp)
      }
    }, e => {
      console.log(e)
    })
  }, [user.id])

  return (
    <div className='nav-b'>
      {/* {JSON.stringify(inProgressTasks)} */}
      <Row className='m-0'>
        <Col md={1} className=''>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }} >
            <div className=''>
              <h5>Taskify</h5>
            </div>
          </div>
        </Col>
        <Col md={1} className=''>
        </Col>
        <Col md={8} className='nav-col'>
          {location.pathname.includes('admin') ? null :
            <ul className='nav-ul'>
              <li onClick={() => navigate('/pending-tasks')} className={`pending ${location.pathname === '/pending-tasks' && 'active_navbar'}`}>Pending<div className='sp-pend'>{pendingTasks.length}</div></li>
              <li onClick={() => navigate('/inprogress-tasks')} className={`inprogress ${location.pathname === '/inprogress-tasks' && 'active_navbar'}`}>In Progress<div className='sp-prog'>{inprogressTasks.length}</div></li>
              <li onClick={() => navigate('/done-tasks')} className={`done ${location.pathname === '/done-tasks' && 'active_navbar'}`}>Done<div className='sp-done'>{doneTasks.length}</div></li>
              <li onClick={() => navigate('/admin')} className='dash'>My Dashboard</li>
            </ul>}
        </Col>
   
        <Col md={2} className=''>
          <div style={{ display: 'flex', alignItems: 'center', height: '50px', justifyContent: 'space-around' }} >
            <div className='settings'>
              <Settings size='1.6em' style={{ color: 'grey', zIndex: 1 }} />
            </div>
            <div className='relative settings'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* {JSON.stringify(notifications && notifications.length)} */}
                <div>
                  <span className='absolute'>{notifications && notifications.length}</span>
                </div>
              </div>
              <FaBell size='1.6em' style={{ color: 'grey', zIndex: 1 }} />
            </div>
            <div className='bell_user_icon_div'>
              <img src={userr} className='userimage' alt='user_image' onClick={()=>navigate('/admin/profile')}/>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
