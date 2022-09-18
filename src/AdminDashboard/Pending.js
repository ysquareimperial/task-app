// import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Card, Table } from 'reactstrap'
import { SERVER_URL, _get } from '../helpers/api'
// import AnimatedMulti from './AnimatedMulti'
// import './Style.css'

export default function Pending() {
    const user = useSelector(state => state.auth.user)

    const [pendingTasks, setPendingTasks] = useState([])

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
    useEffect(() => {

        _get(`tasks/admin/${user.id}/pending`, resp => {
            console.log(resp)
            if (resp && resp.length) { setPendingTasks(resp) }
        }, e => { console.log(e) })
    }, [user.id])


    //     _get(`getprojects/${user.id}`, resp => {
    //         console.log(resp)
    //         if (resp && resp.length) {
    //             setGetProjects(resp)
    //         }
    //     }, e => { console.log(e) })
    // }, [user.id])    
    return (
        <div className='m-5 whole'>
            {/* {JSON.stringify(user)}
            {JSON.stringify(pendingTasks)} */}
            {/* {JSON.stringify(tasksList)} */}

            <Row className=''>
                <Col md={12}>
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
                                        <span className='status_card'>
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
                    {/* <Card className='shadow-sm  p-3 mb-3'>
                             <p className='task_data'>Project Title: <span className='usermail'>{item.title}</span></p>
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
                                     <p className='task_data'>Assigned To</p>
                                     <Card className='shadow-sm p-3 button_card'>
                                         {item.assigned_to}
                                     </Card>
                                 </Col>
                             </Row>
                         </Card> */}
                </Col>

            </Row>
            {pendingTasks.length === 0 ? <p className='text-center' style={{ marginTop: 50 }}>No pending task</p> : null}
        </div>
    )
}
