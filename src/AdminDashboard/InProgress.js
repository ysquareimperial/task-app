// import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Card, Table } from 'reactstrap'
import { _get } from '../helpers/api'
export default function InProgress() {
    const user = useSelector(state => state.auth.user)

    const [inprogressTasks, setInprogressTasks] = useState([])
    useEffect(() => {

        _get(`tasks/admin/${user.id}/in_progress`, resp => {
            console.log(resp)
            if (resp && resp.length) { setInprogressTasks(resp) }
        }, e => { console.log(e) })
    }, [user.id])

    return (
        <div className='m-5 whole'>
            <Table striped hover borderless size="sm">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Project Name</th>
                                <th>Task Title</th>
                                <th>Description</th>
                                <th>Timeline</th>
                                <th>Status</th>
                                <th>Assigned To</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {JSON.stringify(pendingTasks)} */}
                            {inprogressTasks.map((item, index) => (
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
                                        {item.assigned_to}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
            {/* <Row>
                {JSON.stringify(inprogressTasks)}
                <Col md={12}>
                    {inprogressTasks.map((item) => (
                        <Card className='shadow-sm mb-3 p-3'>
                            <p className='task_data'>Project Title: <span className='usermail'>{item.project_id}</span></p>

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
                                        {item.task_timeline_time}
                                    </Card>
                                </Col>
                                <Col md={2}>
                                    <p className='task_data'>Status</p>
                                    <Card className='shadow-sm p-3 progress_card'>
                                        {item.status}
                                    </Card>
                                </Col>
                                <Col md={2}>
                                    <p className='task_data'>Assigned To</p>
                                    <Card className='shadow-sm p-3 button_card'>
                                        {item.assigned_to}
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Col>
            </Row> */}
            {inprogressTasks.length === 0 ? <p className='text-center' style={{ marginTop: 50 }}>No In progress task</p> : null}

        </div>
    )
}
