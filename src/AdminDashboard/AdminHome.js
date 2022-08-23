import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import Button from './Button'

export default function AdminHome() {

    return (
        <div className='m-5'>
            <Row>
                <Col md={3}>
                    <Card className='shadow-sm users_card p-3'>
                        <div className=''>
                            <h4 style={{ fontWeight: 'bold' }}>All Users</h4>
                            <hr></hr>
                            <Row>
                                <Col md={6}>

                                    <h1>12</h1>

                                    <button className='allusersbtn'>View</button>
                                </Col>

                                <Col md={6}>
                                    <div style={{ float: 'right' }}>
                                        <i class="fa-solid fa-user-group fa-3x "></i>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='shadow-sm pending_card p-3'>
                        <div>
                            <h4 style={{ fontWeight: 'bold' }}>Pending Tasks</h4>
                            <hr></hr>
                            <Row>
                                <Col md={6}>

                                    <h1>12</h1>
                                    <button className='pendingbtn'>View</button>
                                </Col>

                                <Col md={6}>
                                    <div style={{ float: 'right' }}>

                                        <i class="fa-solid fa-exclamation fa-3x"></i>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='shadow-sm progress_card p-3'>
                        <div>
                            <h4 style={{ fontWeight: 'bold' }}>In Progress Tasks</h4>
                            <hr></hr>
                            <Row>
                                <Col md={6}>
                                    <h1>12</h1>
                                    <button className='inprogressbtn'>View</button>
                                </Col>

                                <Col md={6}>
                                    <div style={{ float: 'right' }}>

                                        <i class="fa-solid fa-spinner fa-3x"></i>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='shadow-sm done_card p-3'>

                        <div>

                            <h4 style={{ fontWeight: 'bold' }}>Done Tasks</h4>
                            <hr></hr>
                            <Row>
                                <Col md={6}>
                                    <h1>12</h1>
                                    <button className='donebtn'>View</button>
                                </Col>

                                <Col md={6}>
                                    <div style={{ float: 'right' }}>

                                        <i class="fa-solid fa-check fa-3x"></i>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}
