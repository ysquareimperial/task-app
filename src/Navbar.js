import React from 'react'
import { Row, Col } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='nav-b'>
      <Row className='m-0'>
        <Col md={4}><h5>Task Manager</h5></Col>
        <Col md={4} className='nav-col'>
          <ul className='nav-ul'>
            <li onClick={() => navigate('/pending-tasks')} className='pending'>Pending<div className='sp-pend'>0</div></li>
            <li onClick={() => navigate('/inprogress-tasks')} className='inprogress'>In Progress<div className='sp-prog'>0</div></li>
            <li onClick={() => navigate('/done-tasks')} className='done'>Done<div className='sp-done'>0</div></li>
          </ul>
        </Col>
        <Col md={4} className='profile-col'>
          <h6>yasir@brainstorm.ng{' '}
            <button className='logout-btn' onClick={()=>navigate('/')}>Logout</button>
          </h6>
        </Col>
      </Row>
    </div>
  )
}
