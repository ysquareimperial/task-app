import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import Button from './Button'

export default function CreateUser() {
    return (
        <div className='m-5'>
            <Card className='create_task_card p-5 shadow'>
                <p className='task_data'>Create User</p>
                <Row>
                    <Col md={6}>
                        <p style={{ margin: 0, color: 'grey' }}>
                            First Name
                        </p>
                        <input className='input_field mb-3' type='text' />
                        <p style={{ margin: 0, color: 'grey' }}>
                            Last Name
                        </p>
                        <input className='input_field mb-3' type='text' />
                    </Col>
                    <Col md={6}>
                        <p style={{ margin: 0, color: 'grey' }}>
                            Email
                        </p>
                        <input type='email' className='input_field mb-3' />
                        <p style={{ margin: 0, color: 'grey' }}>
                            Rank
                        </p>
                        <select className='input_field'>
                            <option>select rank</option>
                            <option>CEO</option>
                            <option>Manager</option>
                            <option>Senior Developer</option>
                            <option>Junior Developer</option>
                            <option>Fullstack Developer</option>
                            <option>Frontend Developer</option>
                            <option>Backend Developer</option>
                        </select>
                    </Col>
                </Row>
                <Button buttonText={'Create User'} />
            </Card>
        </div>
    )
}
