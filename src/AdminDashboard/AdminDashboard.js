import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import Sidebar from './Sidebar'

export default function AdminDashboard() {
  return (
    <div>
      <Row className='mt-4'>
        <Col md={2} className='side-col'>
          <Sidebar />
        </Col>
        <Col md={10} className=''>
          <Outlet />
        </Col>
      </Row>
    </div>
  )
}
