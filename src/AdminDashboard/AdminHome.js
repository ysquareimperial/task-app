import React, { useCallback, useEffect, useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { SERVER_URL, _get } from '../helpers/api'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function AdminHome() {
    const user = useSelector(state => state.auth.user)

    const navigate = useNavigate()
    const [getProjects, setGetProjects] = useState([])

    // useEffect(() => {
    //     fetch(`${SERVER_URL}/tasks`)
    //         .then(raw => raw.json())
    //         .then(resp => {
    //             console.log(resp)
    //             setTasksList(resp)
    //         })
    //         .catch(e => {
    //             console.log(e)
    //         })
    // }, [])
    const getAllProject = useCallback(() => {
        _get(`getprojects/${user.id}`, resp => {
            console.log(resp)
            if (resp && resp.length) {
                setGetProjects(resp)
            }
        }, e => { console.log(e) })
    }, [user.id])
    useEffect(() => {
        getAllProject()
    }, [getAllProject])


    const [pendingTasks, setPendingTasks] = useState([])
    useEffect(() => {

        _get(`tasks/admin/${user.id}/pending`, resp => {
            console.log(resp)
            if (resp && resp.length) { setPendingTasks(resp) }
        }, e => { console.log(e) })
    }, [user.id])



    const [inprogressTasks, setInprogressTasks] = useState([])
    useEffect(() => {

        _get(`tasks/admin/${user.id}/in_progress`, resp => {
            console.log(resp)
            if (resp && resp.length) { setInprogressTasks(resp) }
        }, e => { console.log(e) })
    }, [user.id])


    const [doneTasks, setDoneTasks] = useState([])
    useEffect(() => {

        _get(`tasks/admin/${user.id}/completed`, resp => {
            console.log(resp)
            if (resp && resp.length) { setDoneTasks(resp) }
        }, e => { console.log(e) })
    }, [user.id])

    return (
        <div className='m-5'>
            {/* {JSON.stringify(doneTasks)} */}
            <Row>
                <Col md={3}>
                    <Card className='shadow-sm users_card p-3'>
                        <div className=''>
                            <h4 style={{ fontWeight: 'bold' }}>Projects</h4>
                            <hr></hr>
                            <Row>
                                <Col md={6}>
                                    {/* {JSON.stringify(user.id)} */}
                                    <h1>{getProjects.length}</h1>
                                    <button className='allusersbtn' onClick={() => navigate('/admin/all-projects')}>View</button>

                                    {/* <button className='allusersbtn'>View</button> */}
                                </Col>

                                <Col md={6}>
                                    <div style={{ float: 'right' }}>
                                        <i class="fa-solid fa-folder fa-3x "></i>
                                        {/* <i class="fa-solid fa-folders fa-3x"></i> */}
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

                                    <h1>{pendingTasks.length}</h1>
                                    <button className='pendingbtn' onClick={() => navigate('/admin/pending-tasks')}>View</button>
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
                                    <h1>{inprogressTasks.length}</h1>
                                    <button className='inprogressbtn' onClick={() => navigate('/admin/inprogress-tasks')}>View</button>
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
                                    <h1>{doneTasks.length}</h1>
                                    <button className='donebtn' onClick={() => navigate('/admin/done-tasks')}>View</button>
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
