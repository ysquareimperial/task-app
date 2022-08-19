// import { Button } from 'bootstrap'
import React from 'react'
import { Row, Col, Card } from 'reactstrap'
import './Style.css'
export default function PendingTasks() {
    const task_details = [
        {
            task_title: 'Landing page design',
            task_description: 'Task description, task descriptiom, task description',
            task_timeline_date: '12/01/2022',
            task_timeline_time: '12:00 PM',
            task_status: 'Pending',
            task_assigned: 'Mr Hammad'
        },
        
    ]



    return (
        <div className='m-5 whole'>
            {task_details.map((item) => (
                <Card className='shadow-sm dashboard_main_card p-3'>
                    <Row>
                        <Col md={3}>
                            <p className='task_data'>Title</p>
                            <Card className='shadow-sm p-3 title_card' style={{ hover: 'back' }}>
                                {item.task_title}
                            </Card>
                        </Col>
                        <Col md={3}>
                            <p className='task_data'>Description</p>
                            <Card className='shadow-sm p-3 description_card'>
                                {item.task_description}
                            </Card>
                        </Col>
                        <Col md={2}>
                            <p className='task_data'>Deadline</p>
                            <Card className='shadow-sm p-3 timeline_card'>
                                {item.task_timeline_date}
                                {item.task_timeline_time}
                            </Card>
                        </Col>
                        <Col md={2}>
                            <p className='task_data'>Status</p>
                            <Card className='shadow-sm p-3 status_card'>
                                {item.task_status}
                            </Card>
                        </Col>
                        <Col md={2}>
                            <p className='task_data'>Action</p>
                            <Card className='shadow-sm p-3 button_card'>
                                <div className='text-center'>
                                    <button className='view_button'>Start</button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            ))}
        </div>
    )
}
