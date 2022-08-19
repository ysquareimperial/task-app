import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  return (
    <>
      <div className='login-div'>
        <div>
          <Row className='m-0'>
            <Col md={4}></Col>
            <Col md={4}>
              <Card className='p-4 shadow login-card'>
                <Row>
                  <Col md={6}>

                    <h3 className=''>Task Manager</h3>
                    <h6 className=''>User Login</h6>
                  </Col>
                  <Col md={6}>

                  </Col>
                </Row>
                <input className='input_field' type='email' placeholder='Company Email' />
                <input className='input_field mt-3' type='password' placeholder='Password' />
                <button className='action_button mt-3' onClick={()=>navigate('/pending-tasks')}>Login</button>
              </Card>
            </Col>
            <Col md={4}></Col>
          </Row>
        </div>
      </div>
    </>
  )
}
