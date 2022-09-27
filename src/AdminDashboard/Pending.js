import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Table, Spinner } from 'reactstrap'
import { _get } from '../helpers/api'
export default function Pending() {
    const user = useSelector(state => state.auth.user)

    const [loading, setLoading] = useState(false)

    const [pendingTasks, setPendingTasks] = useState([])

    const allPendingTask = useCallback(() => {
        if (user.id) {

            setLoading(true)
            _get(`tasks/admin/${user.id}/pending`, resp => {
                setLoading(false)
                console.log(resp)
                if (resp && resp.length) { setPendingTasks(resp) }
            }, e => {
                console.log(e)
                setLoading(false)
            })
        }
    }, [user.id])
    useEffect(() => {
        allPendingTask()
    }, [allPendingTask])

    return (
        <div className='m-5 whole' style={{ fontSize: "13px" }}>
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
                    <div className='text-center'>
                        {loading ? <Spinner /> : ''}
                    </div>
                </Col>
            </Row>
            {pendingTasks.length === 0 ? <p className='text-center' style={{ marginTop: 50 }}>No pending task</p> : null}
        </div>
    )
}
