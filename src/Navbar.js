import React, { useEffect, useState } from 'react'
import { Row, Col } from 'reactstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
import { Power } from 'react-feather'
import { _get } from './helpers/api'
export default function Navbar() {
  const user = useSelector(state => state.auth.user)

  const navigate = useNavigate()
  const location = useLocation()

  let routeTo = '/'

  const handleLogout = () => {
    localStorage.removeItem('taskify')
    window.location = '/'
  }
  // const [pendingTasks, setPendingTasks] = useState([])
  // useEffect(() => {
  //   _get(`tasks/${user.id}/pending`, resp => {
  //     console.log(resp)
  //     if (resp && resp.length) {
  //       setPendingTasks(resp)
  //     }
  //   }, e => { console.log(e) })
  // }, [user.id])


  // const [inprogressTasks, setInprogressTasks] = useState([])

  // useEffect(() => {
  //   _get(`tasks/${user.id}/in_progress`, resp => {
  //     console.log(resp)
  //     if (resp && resp.length) {
  //       setInprogressTasks(resp)
  //     }
  //   }, e => { console.log(e) })
  // }, [user.id])
  const inprogressTasks = useSelector(state => state.tasks.inprogressTasks)
  const pendingTasks = useSelector(state => state.tasks.pendingTasks)
  const doneTasks = useSelector(state => state.tasks.doneTasks)

  return (
    <div className='nav-b'>
      {/* {JSON.stringify(inProgressTasks)} */}
      <Row className='m-0'>
        <Col md={2}><h5>Taskify</h5></Col>
        <Col md={8} className='nav-col'>
          {location.pathname.includes('admin') ? null :
            <ul className='nav-ul'>
              <li onClick={() => navigate('/pending-tasks')} className={`pending ${location.pathname === '/pending-tasks' && 'active_navbar'}`}>Pending<div className='sp-pend'>{pendingTasks.length}</div></li>
              <li onClick={() => navigate('/inprogress-tasks')} className={`inprogress ${location.pathname === '/inprogress-tasks' && 'active_navbar'}`}>In Progress<div className='sp-prog'>{inprogressTasks.length}</div></li>
              <li onClick={() => navigate('/done-tasks')} className={`done ${location.pathname === '/done-tasks' && 'active_navbar'}`}>Done<div className='sp-done'>{doneTasks.length}</div></li>
              <li onClick={() => navigate('/admin')} className='dash'>My Dashboard</li>
            </ul>}
        </Col>
        <Col md={2} className='profile-col'>
          <h6>{user.email}{' '}<Power onClick={handleLogout} className='logout' />
          </h6>
        </Col>
      </Row>
    </div>
  )
}
