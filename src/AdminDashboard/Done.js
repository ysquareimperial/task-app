// import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Card, Table } from 'reactstrap'
import { _get } from '../helpers/api'
export default function Done() {
    const user = useSelector(state => state.auth.user)

    const [doneTasks, setDoneTasks] = useState([])
    useEffect(() => {

        _get(`tasks/admin/${user.id}/completed`, resp => {
            console.log(resp)
            if (resp && resp.length) { setDoneTasks(resp) }
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
                    {doneTasks.map((item, index) => (
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
                                <span className='done_card'>
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
            {doneTasks.length === 0 ? <p className='text-center' style={{ marginTop: 50 }}>No In progress task</p> : null}

        </div>
    )
}
