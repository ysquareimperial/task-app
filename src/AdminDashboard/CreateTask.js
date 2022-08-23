import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import Button from './Button'

export default function CreateTask() {
    return (
        <div className='m-5'>
            <Card className='create_task_card p-3 shadow-sm'>
                <p className='task_data'>Create Task</p>
                <Row>
                    <Col md={5}>
                        <p style={{ margin: 0, color: 'grey' }}>
                            Title
                        </p>
                        <input className='input_field mb-3' type='text' />
                        <p style={{ margin: 0, color: 'grey' }}>
                            Description
                        </p>
                        <textarea className='mb-3' placeholder='write here...'></textarea>
                        <p style={{ margin: 0, color: 'grey' }}>
                            Deadline
                        </p>
                        <input className='input_field mb-3' type='datetime-local' placeholder='Deadline' />
                        <p style={{ margin: 0, color: 'grey' }}>
                            Assign to
                        </p>
                        <select className='input_field'>
                            <option>select user</option>
                            <option>User1</option>
                            <option>User2</option>
                        </select>
                        <Button buttonText={'Create Task'} />
                    </Col>
                    <Col md={7}></Col>
                </Row>
            </Card>
        </div>
    )
}
