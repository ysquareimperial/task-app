import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import { Table } from 'reactstrap'
import { SERVER_URL } from '../helpers/api'
import Button from './Button'
export default function AllUsers() {
    const navigate = useNavigate()
    const allUsers = [
        {
            username: 'ysquareimperial',
            usermail: 'yasir@brainstorm.ng',
            rank: 'Developer'
        },
    ]

    const [getUsers, setGetUser] = useState([])

    useEffect(() => {
        fetch(`${SERVER_URL}/users`)
            .then(raw => raw.json())
            .then(resp => {
                console.log(resp)
                setGetUser(resp)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    return (
        <div className='m-5'>
            <Card className='create_task_card p-3 shadow-sm'>
                <Row>
                    {/* {JSON.stringify(getUsers)} */}
                    <Col md={6}>
                        <p className='task_data'>All Users</p>
                    </Col>
                    <Col md={6}>
                        <Button buttonText={'Add New User'} onClick={() => navigate('/admin/create-user')} style={{ float: 'right' }} />
                    </Col>
                </Row>
                <input type='search' className='input_field mb-3' placeholder='search' />
                {/* <Table size="sm" className="table" striped hover responsive borderless>
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
                </Table> */}
                <Row>
                    {getUsers.map((item, index) => (

                        <Col md={3}>
                            <Card className='p-2 shadow-sm allusers_card mb-4'>
                                <Row>
                                    <Col md={1} style={{ borderRight: '1px solid grey' }}>{index + 1}</Col>
                                    <Col md={10}>{item.name}</Col>
                                </Row>
                                <Row>
                                    <Col md={1}></Col>
                                    <Col md={10}><sapn className='usermail'>{item.email.length > 21 ? `${item.email.substring(0, 21)}...` : item.email}</sapn></Col>
                                    {/* {item.item_name.length > 55
                          ? `${item.item_name.substring(0, 55)}...`
                          : item.item_name}{" "} */}
                                </Row>
                                <Row>
                                    <Col md={1}></Col>
                                    <Col md={10}>{item.rank}</Col>
                                </Row>
                            </Card>
                        </Col>
                    ))}
                    {getUsers.length === 0 ? <p className='text-center'>Click 'Add New User' button to create user.</p> : null}
                </Row>
            </Card>
        </div>
    )
}
