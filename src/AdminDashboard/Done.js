// import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Spinner, Table } from 'reactstrap'
import { _get } from '../helpers/api'
export default function Done() {
    const user = useSelector(state => state.auth.user)

    const [loading, setLoading] = useState(false)


    const [doneTasks, setDoneTasks] = useState([])
    useEffect(() => {
        setLoading(true)
        _get(`tasks/admin/${user.id}/completed`, resp => {
            setLoading(false)
            console.log(resp)
            if (resp && resp.length) { setDoneTasks(resp) }
        }, e => {
            console.log(e)
            setLoading(false)
        })
    }, [user.id])


    return (
        <div className='m-5 whole' style={{ fontSize: "13px" }}>
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
                    <div className='text-center'>
                        {loading ? <Spinner /> : ''}
                    </div>
            {doneTasks.length === 0 ? <p className='text-center' style={{ marginTop: 50 }}>No In progress task</p> : null}

        </div>
    )
}
