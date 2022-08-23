import React from 'react'
import { Row, Col } from 'reactstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'
import { Power } from 'react-feather'
export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className='nav-b'>
      <Row className='m-0'>
        <Col md={4}><h5>Taskify</h5></Col>
        <Col md={4} className='nav-col'>
          {location.pathname.includes('admin') ? null : <ul className='nav-ul'>
            <li onClick={() => navigate('/pending-tasks')} className='pending'>Pending<div className='sp-pend'>0</div></li>
            <li onClick={() => navigate('/inprogress-tasks')} className='inprogress'>In Progress<div className='sp-prog'>0</div></li>
            <li onClick={() => navigate('/done-tasks')} className='done'>Done<div className='sp-done'>0</div></li>
          </ul>}
        </Col>
        <Col md={4} className='profile-col'>
          <h6>yasir@brainstorm.ng{' '}<Power onClick={() => navigate('/')} className='logout' />
          </h6>
        </Col>
      </Row>
    </div>
  )
}
