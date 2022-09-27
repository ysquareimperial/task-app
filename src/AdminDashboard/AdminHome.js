import React, { useCallback, useEffect, useState } from 'react'
import { Card, Col, Row, Spinner } from 'reactstrap'
import { _get } from '../helpers/api'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Plus } from 'react-feather'
export default function AdminHome() {
    const user = useSelector(state => state.auth.user)

    const navigate = useNavigate()
    const [getProjects, setGetProjects] = useState([])
    const [pendingTasks, setPendingTasks] = useState([])
    const [inprogressTasks, setInprogressTasks] = useState([])
    const [doneTasks, setDoneTasks] = useState([])

    const [projectLoading, setProjectLoading] = useState(false)
    const [pendingTasksLoading, setPendingTasksLoading] = useState(false)
    const [inProgressTasksLoading, setInprogressTasksLoading] = useState(false)
    const [doneTasksLoading, setDoneTasksLoading] = useState(false)

    const recentsProjects = getProjects.slice(-5)
    const recentsPendingTasks = pendingTasks.slice(-5)
    const recentsInprogressTasks = inprogressTasks.slice(-5)
    const recentsDoneTasks = doneTasks.slice(-5)

    const getAllProject = useCallback(() => {
        if (user.id) {
            setProjectLoading(true)
            _get(`getprojects/${user.id}`, resp => {
                setProjectLoading(false)
                console.log(resp)
                if (resp && resp.length) {
                    setGetProjects(resp)
                }
            }, e => {
                console.log(e)
                setProjectLoading(false)
            })
        }
    }, [user.id])

    const getPendingTasks = useCallback(() => {
        if (user.id) {

            setPendingTasksLoading(true)
            _get(`tasks/admin/${user.id}/pending`, resp => {
                setPendingTasksLoading(false)
                console.log(resp)
                if (resp && resp.length) {
                    setPendingTasks(resp)
                }
            }, e => {
                console.log(e)
                setPendingTasksLoading(false)
            })
        }
    }, [user.id])

    const getInprogressTasks = useCallback(() => {
        if (user.id) {
            setInprogressTasksLoading(true)
            _get(`tasks/admin/${user.id}/in_progress`, resp => {
                setInprogressTasksLoading(false)
                console.log(resp)
                if (resp && resp.length) { setInprogressTasks(resp) }
            }, e => {
                console.log(e)
                setInprogressTasksLoading(false)
            })
        }
    }, [user.id])

    const getDoneTasks = useCallback(() => {
        if (user.id) {
            setDoneTasksLoading(true)
            _get(`tasks/admin/${user.id}/completed`, resp => {
                setDoneTasksLoading(false)
                console.log(resp)
                if (resp && resp.length) { setDoneTasks(resp) }
            }, e => {
                console.log(e)
                setDoneTasksLoading(false)
            })
        }
    }, [user.id])

    // useEffect(() => {
    //     _get(`tasks/admin/${user.id}/pending`, resp => {
    //         console.log(resp)
    //         if (resp && resp.length) { setPendingTasks(resp) }
    //     }, e => { console.log(e) })
    // }, [user.id])



    // useEffect(() => {
    //     _get(`tasks/admin/${user.id}/in_progress`, resp => {
    //         console.log(resp)
    //         if (resp && resp.length) { setInprogressTasks(resp) }
    //     }, e => { console.log(e) })
    // }, [user.id])


    // useEffect(() => {
    //     _get(`tasks/admin/${user.id}/completed`, resp => {
    //         console.log(resp)
    //         if (resp && resp.length) { setDoneTasks(resp) }
    //     }, e => { console.log(e) })
    // }, [user.id])
    useEffect(() => {
        getAllProject()
        getPendingTasks()
        getInprogressTasks()
        getDoneTasks()
    }, [
        getPendingTasks,
        getInprogressTasks,
        getDoneTasks,
        getAllProject
    ])

    return (
        <div className='m-5'>
            {/* {JSON.stringify(user)} */}
            <Row>
                <Col md={3}>
                    <Card className='shadow-sm users_card p-3'>
                        <div className=''>
                            <h6 style={{ fontWeight: '' }}>Projects</h6>
                            <div className='plus_div' onClick={() => navigate('/admin/create-project')}>
                                <Plus size='1em' />
                            </div>
                            <hr></hr>
                            <Row>
                                <Col md={6}>
                                    <div>
                                        {projectLoading ? <Spinner /> : ""}
                                    </div>
                                    {!getProjects.length ? <span style={{ fontSize: 12 }}>No project</span> : <h1>{getProjects.length}</h1>}
                                </Col>
                                <Col md={6}>
                                    <div style={{ float: 'right' }}>
                                        <i class="fa-solid fa-folder fa-3x "></i>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            Recents projects
                            {/* {getAllProject.slice(2)} */}
                            {recentsProjects.map((item) => (
                                <div className='project_div shadow-sm'>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                        <Col md={12}>
                            <button style={{ width: '100%' }} className='allusersbtn' onClick={() => navigate('/admin/all-projects')}>View All</button>
                        </Col>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='shadow-sm pending_card p-3'>
                        <div>
                            <h6 style={{ fontWeight: '' }}>Pending Tasks</h6>
                            <hr></hr>
                            <Row>
                                <Col md={6}>
                                    <div>
                                        {pendingTasksLoading ? <Spinner /> : ''}
                                    </div>
                                    {!pendingTasks.length ? <span style={{ fontSize: 12 }}>No pending task</span> : <h1>{pendingTasks.length}</h1>}

                                </Col>

                                <Col md={6}>
                                    <div style={{ float: 'right' }}>
                                        <i class="fa-solid fa-exclamation fa-3x"></i>
                                    </div>
                                </Col>
                                <div>
                                    Recents pending tasks
                                    {/* {getAllProject.slice(2)} */}
                                    {recentsPendingTasks.map((item) => (
                                        <div className='pending_div shadow-sm'>
                                            {item.title}
                                        </div>
                                    ))}
                                </div>
                                <Col md={12}>
                                    <button style={{ width: '100%' }} className='pendingbtn' onClick={() => navigate('/admin/pending-tasks')}>View All</button>
                                </Col>
                            </Row>
                        </div>

                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='shadow-sm progress_card p-3'>
                        <div>
                            <h6 style={{ fontWeight: '' }}>In Progress Tasks</h6>
                            <hr></hr>
                            <Row>
                                <Col md={6}>
                                    <div>
                                        {inProgressTasksLoading ? <Spinner /> : ''}
                                    </div>
                                    {!inprogressTasks.length ? <span style={{ fontSize: 12 }}>No in progress task</span> : <h1>{inprogressTasks.length}</h1>}
                                </Col>
                                <Col md={6}>
                                    <div style={{ float: 'right' }}>
                                        <i class="fa-solid fa-spinner fa-3x"></i>
                                    </div>
                                </Col>
                                <div>
                                    Recents in progress tasks
                                    {/* {getAllProject.slice(2)} */}
                                    {recentsInprogressTasks.map((item) => (
                                        <div className='inprogress_div shadow-sm'>
                                            {item.title}
                                        </div>
                                    ))}
                                </div>
                                <Col md={12}>
                                    <button style={{ width: '100%' }} className='inprogressbtn' onClick={() => navigate('/admin/inprogress-tasks')}>View All</button>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='shadow-sm done_card p-3'>
                        <div>
                            <h6 style={{ fontWeight: '' }}>Done Tasks</h6>
                            <hr></hr>
                            <Row>
                                <Col md={6}>
                                    <div>
                                        {doneTasksLoading ? <Spinner /> : ''}
                                    </div>
                                    {!doneTasks.length ? <span style={{ fontSize: 12 }}>No done task</span> : <h1>{doneTasks.length}</h1>}
                                </Col>
                                <Col md={6}>
                                    <div style={{ float: 'right' }}>
                                        <i class="fa-solid fa-check fa-3x"></i>
                                    </div>
                                </Col>
                                <div>
                                    Recents done tasks
                                    {/* {getAllProject.slice(2)} */}
                                    {recentsDoneTasks.map((item) => (
                                        <div className='done_div shadow-sm'>
                                            {item.title}
                                        </div>
                                    ))}
                                </div>
                                <Col md={12}>
                                    <button style={{ width: '100%' }} className='donebtn' onClick={() => navigate('/admin/done-tasks')}>View All</button>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}
