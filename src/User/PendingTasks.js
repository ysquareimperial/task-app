// import { Button } from 'bootstrap'
import React, { useCallback, useEffect, useState } from 'react'
import { Row, Col, Card, Table } from 'reactstrap'
import './Style.css'
import { useDispatch, useSelector } from 'react-redux'
import { _get, _put } from '../helpers/api'
import { getInprogressTasks, getPendingTasks } from '../redux/action/tasks'
export default function PendingTasks() {
    // const info = useSelector(state => state.auth)
    const user = useSelector(state => state.auth.user)
    const pendingTasks = useSelector(state => state.tasks.pendingTasks)
    const dispatch = useDispatch()

    const getTask = useCallback(() => {
        dispatch(getPendingTasks(user.id))
    }, [dispatch,user])

    useEffect(() => {
        getTask()
    }, [getTask])

    const changeStatus = (id) => {
        _put(`tasks/${id}/update/pending`, pendingTasks, resp => {
            console.log(resp, 'iuytfdsdfghujhgfdsdrtyghvf')
            getTask()
            dispatch(getInprogressTasks(user.id))

        }, e => { console.log(e) })
    }

    console.log(pendingTasks.id)
    return (
        <div className='whole' style={{margin:'70px 50px'}}>
            {/* {JSON.stringify(pendingTasks)} */}
            {/* <Row className=''>
                <Col md={1}></Col>
                <Col md={10}>
                    {pendingTasks.map((item) => (
                        <Card className='shadow-sm dashboard_main_card p-3'>
                            <Row>
                                <Col md={3}>
                                    <p className='task_data'>Title</p>
                                    <Card className='shadow-sm p-3 title_card' style={{ hover: 'back' }}>
                                        {item.title}
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <p className='task_data'>Description</p>
                                    <Card className='shadow-sm p-3 description_card'>
                                        {item.description}
                                    </Card>
                                </Col>
                                <Col md={2}>
                                    <p className='task_data'>Deadline</p>
                                    <Card className='shadow-sm p-3 timeline_card'>
                                        {item.timeline}
                                    </Card>
                                </Col>
                                <Col md={2}>
                                    <p className='task_data'>Status</p>
                                    <Card className='shadow-sm p-3 status_card'>
                                        {item.status}
                                    </Card>
                                </Col>
                                <Col md={2}>
                                    <p className='task_data'>Action</p>
                                    <Card className='shadow-sm p-3 button_card'>
                                        <div className='text-center'>
                                            <button className='view_button' onClick={() => changeStatus(item.id)}>Start</button>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Col>
                <Col md={1}></Col>
            </Row> */}
            <Table striped hover borderless size="sm">
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>Project Name</th>
                        <th>Task Title</th>
                        <th>Description</th>
                        <th>Timeline</th>
                        <th>Status</th>
                        <th>Assigned By</th>
                    </tr>
                </thead>
                <tbody>
                    {pendingTasks.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.project_name}</td>
                            <td>
                                {item.title}
                            </td>
                            <td>

                                {item.description}
                            </td>
                            <td>
                                {item.timeline}
                            </td>
                            <td>
                                <span className='progress_card'>
                                    {item.status}
                                </span>
                            </td>
                            <td>
                                {item.assigned_by}
                            </td>
                            <td>
                                <button className='view_button' onClick={() => changeStatus(item.id)}>Start</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {pendingTasks.length === 0 ? <p className='text-center' style={{ marginTop: 50 }}>No pending task</p> : null}
        </div>
    )
}
