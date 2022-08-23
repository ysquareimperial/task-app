import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import { Table } from 'reactstrap'
import Button from './Button'
export default function AllUsers() {
    const navigate = useNavigate()
    return (
        <div className='m-5'>
            <Card className='create_task_card p-3 shadow-sm'>
                <Row>
                    <Col md={6}>
                        <p className='task_data'>All Users</p>
                    </Col>
                    <Col md={6}>
                        <Button buttonText={'Add New User'} onClick={() => navigate('/admin/create-user')} style={{ float: 'right' }} />
                    </Col>
                </Row>
                <Table size="sm" className="table" striped hover responsive borderless>
                    <thead>
                        <tr style={{color:'grey'}}>
                            <th>S/N</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td style={{color:'grey'}}>
                                1
                            </td>
                            <td style={{color:'grey'}} className="">ysquareimperial</td>
                            <td style={{color:'grey'}} className="">yasir@brainstorm</td>
                            <td style={{color:'grey'}} className=''>Developer</td>
                        </tr>
                        <tr>
                            <td style={{color:'grey'}}>
                                1
                            </td>
                            <td style={{color:'grey'}} className="">ysquareimperial</td>
                            <td style={{color:'grey'}} className="">yasir@brainstorm</td>
                            <td style={{color:'grey'}} className=''>Developer</td>
                        </tr> <tr>
                            <td style={{color:'grey'}}>
                                1
                            </td>
                            <td style={{color:'grey'}} className="">ysquareimperial</td>
                            <td style={{color:'grey'}} className="">yasir@brainstorm</td>
                            <td style={{color:'grey'}} className=''>Developer</td>
                        </tr>
                        <tr>
                            <td style={{color:'grey'}}>
                                1
                            </td>
                            <td style={{color:'grey'}} className="">ysquareimperial</td>
                            <td style={{color:'grey'}} className="">yasir@brainstorm</td>
                            <td style={{color:'grey'}} className=''>Developer</td>
                        </tr> <tr>
                            <td style={{color:'grey'}}>
                                1
                            </td>
                            <td style={{color:'grey'}} className="">ysquareimperial</td>
                            <td style={{color:'grey'}} className="">yasir@brainstorm</td>
                            <td style={{color:'grey'}} className=''>Developer</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        </div>
    )
}
