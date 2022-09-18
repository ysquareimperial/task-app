// import { Button } from 'bootstrap'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card } from 'reactstrap'
import { _delete, _get } from '../helpers/api'
import { getDoneTasks } from '../redux/action/tasks'
import './Style.css'
export default function DoneTasks() {
      const user = useSelector(state => state.auth.user)

    //     const [doneTasks, setDoneTasks] = useState([])

    //     const getTask = useCallback(() => {
    //       _get(`tasks/${user.id}/completed`, resp => {
    //         console.log(resp)
    //         if (resp && resp.length) {
    //           setDoneTasks(resp)
    //         }
    //       }, e => { console.log(e) })
    //     }, [user.id])

    //     useEffect(() => {
    //     }, [user.id])
    //     useEffect(() => {
    //       getTask()
    //     }, [getTask])

    const doneTasks = useSelector(state => state.tasks.doneTasks)
    const dispatch = useDispatch()


    const getTask = useCallback(() => {
        dispatch(getDoneTasks(user.id))
    }, [dispatch,user])

    useEffect(() => {
        getTask()
    }, [getTask])

    const deleteTask = (id) => {
        _delete(`tasks/${id}/delete`, doneTasks, resp => { console.log(resp) }, e => { console.log(e) })
    }
    return (
        <div className='whole' style={{margin:'70px 50px'}}>

            <Row>
                {/* {JSON.stringify(doneTasks)} */}
                <Col md={1}></Col>
                <Col md={10}>

                    {doneTasks.map((item) => (
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
                                    <Card className='shadow-sm p-3 done_card'>
                                        {item.status}
                                    </Card>
                                </Col>
                                <Col md={2}>
                                    <p className='task_data'>Action</p>
                                    <Card className='shadow-sm p-3 button_card'>
                                        <div className='text-center'>
                                            <button className='view_button' onClick={() => deleteTask(item.id)}>Delete</button>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    ))}

                </Col>
                <Col md={1}></Col>
            </Row>
            {doneTasks.length === 0 ? <p className='text-center' style={{ marginTop: 50 }}>No Done task</p> : null}

        </div>
    )
}
