import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import { Table } from 'reactstrap'
import { SERVER_URL, _get, _post } from '../helpers/api'
import Button from './Button'
import { useSelector } from 'react-redux'

const token = localStorage.getItem('token')

export default function AllProjects() {
    const user = useSelector(state => state.auth.user)
    const navigate = useNavigate()
    const [getProjects, setGetProjects] = useState([])

    useEffect(() => {
        //     fetch(`${SERVER_URL}/projects`)
        //         .then(raw => raw.json())
        // .then(resp => {
        //     console.log(resp)
        //     setGetProjects(resp)
        // })
        //         .catch(e => {
        //             console.log(e)
        //         })

        _get(`getprojects/${user.id}`, resp => {
            console.log(resp)
            if (resp && resp.length) {
                setGetProjects(resp)
            }
        }, e => { console.log(e) })
    }, [user.id])


    return (
        <div className='m-5'>
            {/* {JSON.stringify(getProjects)} */}
            <Card className='create_task_card p-3 shadow-sm'>
                <Row>
                    <Col md={6}>
                        <p className='task_data'>All Projects</p>
                    </Col>
                    <Col md={6}>
                        <Button buttonText={'Create New Project'} onClick={() => navigate('/admin/create-project')} style={{ float: 'right' }} />
                    </Col>
                </Row>
                <input type='search' className='input_field mb-3' placeholder='search' />

                <Row>
                    {getProjects && getProjects.map((item, index) => (

                        <Col md={3}>
                            <Card className='p-2 shadow-sm allusers_card mb-4'>
                                <Row>
                                    <Col md={2} style={{ borderRight: '1px solid grey', fontSize: 10 }}>{index + 1}</Col>
                                    <Col md={10}><sapn className='usermail'>{item.name}</sapn></Col>
                                </Row>
                                <p className='mt-1'>{item.description}</p>
                            </Card>
                        </Col>
                    ))}
                    {getProjects.length === 0 ? <p className='text-center'>Click 'Create New Project' button to create project.</p> : null}
                </Row>
            </Card>
        </div>
    )
}
